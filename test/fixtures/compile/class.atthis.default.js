var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/class.atthis.default.ks"]) {
	__ks_coverage["/fixtures/compile/class.atthis.default.ks"] = {"path":"/fixtures/compile/class.atthis.default.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0,"2":0,"3":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":1}},"2":{"start":{"line":5,"column":0},"end":{"line":19,"column":1}},"3":{"start":{"line":11,"column":2},"end":{"line":11,"column":16}},"4":{"start":{"line":17,"column":2},"end":{"line":17,"column":61}},"5":{"start":{"line":21,"column":0},"end":{"line":21,"column":41}},"6":{"start":{"line":23,"column":0},"end":{"line":23,"column":38}}},"branchMap":{},"fnMap":{"1":{"name":"constructor","line":10,"loc":{"start":{"line":10,"column":1},"end":{"line":12,"column":2}}},"2":{"name":"constructor","line":14,"loc":{"start":{"line":14,"column":1},"end":{"line":14,"column":22}}},"3":{"name":"greet","line":16,"loc":{"start":{"line":16,"column":1},"end":{"line":18,"column":2}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/class.atthis.default.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/class.atthis.default.ks"].s[2]++;
	class Greetings {
		constructor() {
			this.__ks_init();
			this.__ks_cons(arguments);
		}
		__ks_init_1() {
			this._message = "";
		}
		__ks_init() {
			Greetings.prototype.__ks_init_1.call(this);
		}
		__ks_cons_0() {
			__ks_coverage["/fixtures/compile/class.atthis.default.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/class.atthis.default.ks"].s[3]++;
			Greetings.prototype.__ks_cons.call(this, ["Hello!"]);
		}
		__ks_cons_1(message) {
			if(arguments.length < 1) {
				throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
			}
			if(message === void 0 || message === null) {
				throw new TypeError("'message' is not nullable");
			}
			else if(!Type.isString(message)) {
				throw new TypeError("'message' is not of type 'String'");
			}
			this._message = message;
			__ks_coverage["/fixtures/compile/class.atthis.default.ks"].f[2]++;
		}
		__ks_cons(args) {
			if(args.length === 0) {
				Greetings.prototype.__ks_cons_0.apply(this);
			}
			else if(args.length === 1) {
				Greetings.prototype.__ks_cons_1.apply(this, args);
			}
			else {
				throw new SyntaxError("wrong number of arguments");
			}
		}
		__ks_func_greet_0(name) {
			if(arguments.length < 1) {
				throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
			}
			if(name === void 0 || name === null) {
				throw new TypeError("'name' is not nullable");
			}
			__ks_coverage["/fixtures/compile/class.atthis.default.ks"].f[3]++;
			__ks_coverage["/fixtures/compile/class.atthis.default.ks"].s[4]++;
			return this._message + "\nIt's nice to meet you, " + name + ".";
		}
		greet() {
			if(arguments.length === 1) {
				return Greetings.prototype.__ks_func_greet_0.apply(this, arguments);
			}
			throw new SyntaxError("wrong number of arguments");
		}
	}
	__ks_coverage["/fixtures/compile/class.atthis.default.ks"].s[5]++;
	let hello = new Greetings("Hello world!");
	__ks_coverage["/fixtures/compile/class.atthis.default.ks"].s[6]++;
	console.log(hello.greet("miss White"));
};