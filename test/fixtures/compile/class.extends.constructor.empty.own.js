var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"]) {
	__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"] = {"path":"/fixtures/compile/class.extends.constructor.empty.own.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{},"f":{"1":0,"2":0,"3":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":14}},"2":{"start":{"line":3,"column":0},"end":{"line":7,"column":1}},"3":{"start":{"line":5,"column":2},"end":{"line":5,"column":11}},"4":{"start":{"line":9,"column":0},"end":{"line":19,"column":1}},"5":{"start":{"line":17,"column":2},"end":{"line":17,"column":45}},"6":{"start":{"line":21,"column":0},"end":{"line":21,"column":30}},"7":{"start":{"line":23,"column":0},"end":{"line":23,"column":21}}},"branchMap":{},"fnMap":{"1":{"name":"draw","line":4,"loc":{"start":{"line":4,"column":1},"end":{"line":6,"column":2}}},"2":{"name":"constructor","line":14,"loc":{"start":{"line":14,"column":1},"end":{"line":14,"column":20}}},"3":{"name":"draw","line":16,"loc":{"start":{"line":16,"column":1},"end":{"line":18,"column":2}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].s[2]++;
	class Shape {
		constructor() {
			this.__ks_init();
			this.__ks_cons(arguments);
		}
		__ks_init() {
		}
		__ks_cons(args) {
			if(args.length !== 0) {
				throw new SyntaxError("Wrong number of arguments");
			}
		}
		__ks_func_draw_0() {
			__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].s[3]++;
			return "";
		}
		draw() {
			if(arguments.length === 0) {
				return Shape.prototype.__ks_func_draw_0.apply(this);
			}
			throw new SyntaxError("Wrong number of arguments");
		}
	}
	__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].s[4]++;
	class Rectangle extends Shape {
		__ks_init() {
			Shape.prototype.__ks_init.call(this);
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
			Shape.prototype.__ks_cons.call(this, []);
			this._color = color;
			__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].f[2]++;
		}
		__ks_cons(args) {
			if(args.length === 1) {
				Rectangle.prototype.__ks_cons_0.apply(this, args);
			}
			else {
				throw new SyntaxError("Wrong number of arguments");
			}
		}
		__ks_func_draw_0() {
			__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].f[3]++;
			__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].s[5]++;
			return "I'm drawing a " + this._color + " rectangle.";
		}
		draw() {
			if(arguments.length === 0) {
				return Rectangle.prototype.__ks_func_draw_0.apply(this);
			}
			return Shape.prototype.draw.apply(this, arguments);
		}
	}
	__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].s[6]++;
	let r = new Rectangle("black");
	__ks_coverage["/fixtures/compile/class.extends.constructor.empty.own.ks"].s[7]++;
	console.log(r.draw());
};