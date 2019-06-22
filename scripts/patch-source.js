var Compiler = require('../lib/compiler.js')().Compiler;
var fs = require('fs');
var path = require('path');
var program = require('commander');

program.parse(process.argv);

var root = path.join(__dirname, '..', 'test')

var files = fs.readdirSync(path.join(root, 'fixtures', 'compile'));
var prefix = program.args[0] || ''
var preLength = prefix.length

var file;
for(var i = 0; i < files.length; i++) {
	file = files[i];

	if(file.slice(-3) === '.js' && file.substr(0, preLength) === prefix) {
		patch(file);
	}
}

function patch(file) {
	var name = file.slice(0, -3);

	console.log('patching ' + path.join('fixtures', 'compile', name + '.ks'))

	var length = root.length;

	try {
		var compiler = new Compiler(path.join(root, 'fixtures', 'compile', name + '.ks'), {
			header: false,
			reducePath: function(path) {
				return path.substr(length);
			}
		});

		var data = compiler.instrument().compile().toSource();

		fs.writeFileSync(path.join(root, 'fixtures', 'compile', name + '.js'), data, {
			encoding: 'utf8'
		});
	}
	catch(error) {
	}
}