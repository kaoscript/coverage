/**
 * module.js
 * Version 0.1.0
 * January 11th, 2017
 *
 * Copyright (c) 2017 Baptiste Augrain
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
var path = require('path');

if(require.extensions) {
	var Module = require('module');
	function findExtension(filename) { // {{{
		var extensions = path.basename(filename).split('.');
		if(extensions[0] === '') {
			extensions.shift();
		}
		
		var curExtension;
		while(extensions.shift()) {
			curExtension = '.' + extensions.join('.');
			
			if(Module._extensions[curExtension]) {
				return curExtension;
			}
		}
		
		return '.js';
	}; // }}}
	
	Module.prototype.load = function(filename) { // {{{
		this.filename = filename;
		this.paths = Module._nodeModulePaths(path.dirname(filename));
		
		Module._extensions[findExtension(filename)](this, filename);
		
		return this.loaded = true;
	}; // }}}
}

module.exports = {
	registerExtension: function(ext, loader) {
		require.extensions[ext] = loader;
	}
}