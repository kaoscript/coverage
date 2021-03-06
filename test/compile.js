var chai = require('chai');
var Compiler = require('..')().Compiler;
var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');

describe('compile', function() {
	var length = __dirname.length;
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
				header: false,
				reducePath: function(path) {
					return path.substr(length);
				}
			});

			try {
				var error = fs.readFileSync(path.join(__dirname, 'fixtures', 'compile', name + '.error'), {
					encoding: 'utf8'
				});
			}
			catch(error) {
			}

			if(error) {
				var data;

				try {
					data = compiler.compile().toSource();
				}
				catch(ex) {
					//console.log(ex)
					expect(ex.fileName).to.exist;

					ex.fileName = path.relative(__dirname, ex.fileName);

					expect(ex.toString()).to.equal(error);
				}

				expect(data).to.not.exist;
			}
			else {
				var data = compiler.instrument().compile().toSource();
				// console.log(data);

				var source = fs.readFileSync(path.join(__dirname, 'fixtures', 'compile', name + '.js'), {
					encoding: 'utf8'
				});

				expect(data.split(/\n/g)).to.eql(source.split(/\n/g));
			}
		});
	}
});