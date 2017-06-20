var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/namespace.class.ks"]) {
	__ks_coverage["/fixtures/compile/namespace.class.ks"] = {"path":"/fixtures/compile/namespace.class.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":10,"column":1}},"2":{"start":{"line":2,"column":1},"end":{"line":7,"column":2}},"3":{"start":{"line":9,"column":1},"end":{"line":9,"column":14}},"4":{"start":{"line":12,"column":0},"end":{"line":12,"column":26}}},"branchMap":{},"fnMap":{"1":{"name":"constructor","line":6,"loc":{"start":{"line":6,"column":2},"end":{"line":6,"column":29}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/namespace.class.ks"].s[1]++;
	let qux = (function() {
		__ks_coverage["/fixtures/compile/namespace.class.ks"].s[2]++;
		class Foobar {
			constructor() {
				this.__ks_init();
				this.__ks_cons(arguments);
			}
			__ks_init() {
			}
			__ks_cons_0(name) {
				if(name === void 0 || name === null) {
					name = "john";
				}
				else if(!Type.isString(name)) {
					throw new TypeError("'name' is not of type 'String'");
				}
				this._name = name;
				__ks_coverage["/fixtures/compile/namespace.class.ks"].f[1]++;
			}
			__ks_cons(args) {
				if(args.length >= 0 && args.length <= 1) {
					Foobar.prototype.__ks_cons_0.apply(this, args);
				}
				else {
					throw new SyntaxError("wrong number of arguments");
				}
			}
		}
		__ks_coverage["/fixtures/compile/namespace.class.ks"].s[3]++;
		return {
			Foobar: Foobar
		};
	})();
	__ks_coverage["/fixtures/compile/namespace.class.ks"].s[4]++;
	const x = new qux.Foobar();
}