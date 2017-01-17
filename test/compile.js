var chai = require('chai');
var Compiler = require('..')().Compiler;
var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');

describe('compile', function() {
	var files = fs.readdirSync(path.join(__dirname, 'fixtures', 'compile'));
	
	var file;
	for(var i = 0; i < files.length; i++) {
		file = files[i];
		
		if(file.slice(-3) === '.ks') {
			prepare(file);
		}
	}
	
	function prepare(file) {
		var name = file.slice(0, -3);
		it(name, function() {
			this.timeout(5000);
			
			var compiler = new Compiler(path.join(__dirname, 'fixtures', 'compile', file), {
				config: {
					header: false
				}
			});
			
			var data = compiler.instrument().compile().toSource();
			console.log(data);
			
			expect(data).to.equal(fs.readFileSync(path.join(__dirname, 'fixtures', 'compile', name + '.js'), {
				encoding: 'utf8'
			}));
		});
	}
});