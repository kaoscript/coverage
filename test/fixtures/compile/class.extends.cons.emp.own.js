var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"]) {
	__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"] = {"path":"/fixtures/compile/class.extends.cons.emp.own.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":14}},"2":{"start":{"line":3,"column":0},"end":{"line":8,"column":1}},"3":{"start":{"line":10,"column":0},"end":{"line":20,"column":1}},"4":{"start":{"line":18,"column":2},"end":{"line":18,"column":45}},"5":{"start":{"line":22,"column":0},"end":{"line":22,"column":30}},"6":{"start":{"line":24,"column":0},"end":{"line":24,"column":21}}},"branchMap":{},"fnMap":{"1":{"name":"constructor","line":4,"loc":{"start":{"line":4,"column":1},"end":{"line":4,"column":14}}},"2":{"name":"draw","line":6,"loc":{"start":{"line":6,"column":1},"end":{"line":7,"column":2}}},"3":{"name":"constructor","line":15,"loc":{"start":{"line":15,"column":1},"end":{"line":15,"column":20}}},"4":{"name":"draw","line":17,"loc":{"start":{"line":17,"column":1},"end":{"line":19,"column":2}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].s[2]++;
	class Shape {
		constructor() {
			this.__ks_init();
			this.__ks_cons(arguments);
		}
		__ks_init() {
		}
		__ks_cons_0() {
			__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].f[1]++;
		}
		__ks_cons(args) {
			if(args.length === 0) {
				Shape.prototype.__ks_cons_0.apply(this);
			}
			else {
				throw new SyntaxError("wrong number of arguments");
			}
		}
		__ks_func_draw_0() {
			__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].f[2]++;
		}
		draw() {
			if(arguments.length === 0) {
				return Shape.prototype.__ks_func_draw_0.apply(this);
			}
			throw new SyntaxError("wrong number of arguments");
		}
	}
	__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].s[3]++;
	class Rectangle extends Shape {
		__ks_init() {
			Shape.prototype.__ks_init.call(this);
		}
		__ks_cons_0(color) {
			if(arguments.length < 1) {
				throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
			}
			if(color === void 0 || color === null) {
				throw new TypeError("'color' is not nullable");
			}
			else if(!Type.isString(color)) {
				throw new TypeError("'color' is not of type 'String'");
			}
			Shape.prototype.__ks_cons.call(this, []);
			this._color = color;
			__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].f[3]++;
		}
		__ks_cons(args) {
			if(args.length === 1) {
				Rectangle.prototype.__ks_cons_0.apply(this, args);
			}
			else {
				throw new SyntaxError("wrong number of arguments");
			}
		}
		__ks_func_draw_0() {
			__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].f[4]++;
			__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].s[4]++;
			return "I'm drawing a " + this._color + " rectangle.";
		}
		draw() {
			if(arguments.length === 0) {
				return Rectangle.prototype.__ks_func_draw_0.apply(this);
			}
			return Shape.prototype.draw.apply(this, arguments);
		}
	}
	__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].s[5]++;
	let r = new Rectangle("black");
	__ks_coverage["/fixtures/compile/class.extends.cons.emp.own.ks"].s[6]++;
	console.log(r.draw());
};