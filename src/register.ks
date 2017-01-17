/**
 * register.ks
 * Version 0.1.0
 * January 11th, 2017
 *
 * Copyright (c) 2017 Baptiste Augrain
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
#![bin]

import {
	*					from ./compiler
	* as fs				from kaoscript/src/fs.js
	* as path			from path
	registerExtension	from ./module.js
}

extern console, Date, global, JSON, parseInt, process

func excludeFile(filename) { // {{{
	filename = path.relative(root, filename)
	
	for exclude in excludes {
		return true if filename.startsWith(exclude)
	}
	
	return false
} // }}}

func loadFile(module, filename) { // {{{
	if excludeFile(filename) {
		return loadOriginalFile(module, filename)
	}
	else {
		return loadInstrumentedFile(module, filename)
	}
} // }}}

func loadInstrumentedFile(module, filename) { // {{{
	try {
		const compiler = new Compiler(filename, {
			register: false,
			target: target
		})
		
		compiler.instrument(coverageName)
		
		compiler.compile(fs.readFile(filename))
		
		compiler.writeFiles()
		
		const data = compiler.toSource()
		//console.log(data)
		
		return module._compile(data, filename)
	}
	catch error {
		if !error.message.startsWith('/') {
			error.message = (error.filename || filename) + ': ' + error.message
		}
		
		throw error
	}
} // }}}

func loadOriginalFile(module, filename) { // {{{
	try {
		const source = fs.readFile(filename)
		
		if(fs.isFile(getBinaryPath(filename, target)) && fs.isFile(getHashPath(filename, target)) && isUpToDate(filename, target, source)) {
			return module._compile(fs.readFile(getBinaryPath(filename, target)), filename)
		}
		else {
			const compiler = new Compiler(filename, {
				register: false,
				target: target
			})
			
			compiler.compile(source)
			
			compiler.writeFiles()
			
			return module._compile(compiler.toSource(), filename)
		}
	}
	catch error {
		if !error.message.startsWith('/') {
			error.message = (error.filename || filename) + ': ' + error.message
		}
		
		throw error
	}
} // }}}

func findGlobalVariable() { // {{{
	const coverageVar = '$$cov_' + Date.now() + '$$'
	
	if global[coverageVar]? {
		return coverageVar
	}
	else {
		const coverageVars = [key for key of global when key.startsWith('$$cov_')]
		
		return coverageVars.length == 1 ? coverageVars[0] : null
	}
} // }}}

func writeOnExit(file = 'coverage/coverage.json') { // {{{
	process.on('exit', func() {
		try {
			fs.writeFile(file, JSON.stringify(global.__ks_coverage, null, 2))
		}
		catch error {
			console.error(`Failed to write coverage data`, error.stack ?? error)
		}
	})
} // }}}

const coverageName = findGlobalVariable()
const excludes = ['test/', 'node_modules/', '.git/']
const root = process.cwd()
const target = parseInt(/^v(\d+)\./.exec(process.version)[1]) >= 6 ? 'ecma-v6' : 'ecma-v5'

registerExtension(extensions.source, loadFile)

if !?coverageName {
	writeOnExit(process.env.COFFEECOV_OUT)
}