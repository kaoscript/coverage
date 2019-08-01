var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"]) {
	__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"] = {"path":"/fixtures/compile/partial.method.identical.override.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":1}},"2":{"start":{"line":5,"column":0},"end":{"line":19,"column":1}},"3":{"start":{"line":11,"column":2},"end":{"line":11,"column":26}},"4":{"start":{"line":17,"column":2},"end":{"line":17,"column":45}},"5":{"start":{"line":21,"column":0},"end":{"line":30,"column":1}},"6":{"start":{"line":24,"column":11},"end":{"line":24,"column":16}},"7":{"start":{"line":25,"column":16},"end":{"line":25,"column":20}},"8":{"start":{"line":28,"column":2},"end":{"line":28,"column":44}},"9":{"start":{"line":32,"column":0},"end":{"line":32,"column":28}},"10":{"start":{"line":34,"column":0},"end":{"line":34,"column":25}}},"branchMap":{},"fnMap":{"1":{"name":"makeBlue","line":10,"loc":{"start":{"line":10,"column":1},"end":{"line":12,"column":2}}},"2":{"name":"constructor","line":14,"loc":{"start":{"line":14,"column":1},"end":{"line":14,"column":20}}},"3":{"name":"draw","line":16,"loc":{"start":{"line":16,"column":1},"end":{"line":18,"column":2}}},"4":{"name":"name","line":24,"loc":{"start":{"line":24,"column":1},"end":{"line":24,"column":16}}},"5":{"name":"name","line":25,"loc":{"start":{"line":25,"column":1},"end":{"line":25,"column":20}}},"6":{"name":"draw","line":27,"loc":{"start":{"line":27,"column":1},"end":{"line":29,"column":2}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[2]++;
	class Shape {
		constructor() {
			this.__ks_init();
			this.__ks_cons(arguments);
		}
		__ks_init_1() {
			this._color = "";
		}
		__ks_init() {
			Shape.prototype.__ks_init_1.call(this);
		}
		__ks_cons_0(color) {
			if(arguments.length < 1) {
				throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
			}
			if(color === void 0 || color === null) {
				throw new TypeError("'color' is not nullable");
			}
			else if(!Type.isString(color)) {
				throw new TypeError("'color' is not of type 'String'");
			}
			this._color = color;
			__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].f[2]++;
		}
		__ks_cons(args) {
			if(args.length === 1) {
				Shape.prototype.__ks_cons_0.apply(this, args);
			}
			else {
				throw new SyntaxError("Wrong number of arguments");
			}
		}
		__ks_func_draw_0() {
			__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].f[3]++;
			__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[4]++;
			return "I'm drawing a " + this._color + " rectangle.";
		}
		draw() {
			if(arguments.length === 0) {
				return Shape.prototype.__ks_func_draw_0.apply(this);
			}
			throw new SyntaxError("Wrong number of arguments");
		}
		static __ks_sttc_makeBlue_0() {
			__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[3]++;
			return new Shape("blue");
		}
		static makeBlue() {
			if(arguments.length === 0) {
				return Shape.__ks_sttc_makeBlue_0.apply(this);
			}
			throw new SyntaxError("Wrong number of arguments");
		}
	}
	__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[5]++;
	Shape.prototype.__ks_init_2 = function() {
		this._name = "circle";
	};
	Shape.prototype.__ks_func_name_0 = function() {
		__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].f[4]++;
		__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[6]++;
		return this._name;
	};
	Shape.prototype.__ks_func_name_1 = function(name) {
		if(arguments.length < 1) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
		}
		if(name === void 0 || name === null) {
			throw new TypeError("'name' is not nullable");
		}
		else if(!Type.isString(name)) {
			throw new TypeError("'name' is not of type 'String'");
		}
		this._name = name;
		__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].f[5]++;
		__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[7]++;
		return this;
	};
	Shape.prototype.__ks_func_draw_0 = function() {
		__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].f[6]++;
		__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[8]++;
		return "I'm drawing a " + this._color + " " + this._name + ".";
	};
	Shape.prototype.__ks_init = function() {
		Shape.prototype.__ks_init_1.call(this);
		Shape.prototype.__ks_init_2.call(this);
	};
	Shape.prototype.name = function() {
		if(arguments.length === 0) {
			return Shape.prototype.__ks_func_name_0.apply(this);
		}
		else if(arguments.length === 1) {
			return Shape.prototype.__ks_func_name_1.apply(this, arguments);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[9]++;
	let shape = Shape.makeBlue();
	__ks_coverage["/fixtures/compile/partial.method.identical.override.ks"].s[10]++;
	console.log(shape.draw());
};