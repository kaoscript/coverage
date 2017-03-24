var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":25}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":26}},"3":{"start":{"line":4,"column":0},"end":{"line":8,"column":1}},"4":{"start":{"line":10,"column":0},"end":{"line":14,"column":1}},"5":{"start":{"line":11,"column":1},"end":{"line":11,"column":31}},"6":{"start":{"line":13,"column":1},"end":{"line":13,"column":74}}},"branchMap":{"1":{"type":"cond-expr","line":13,"locations":[{"start":{"line":13,"column":8},"end":{"line":13,"column":9}},{"start":{"line":13,"column":27},"end":{"line":13,"column":74}}]},"2":{"type":"cond-expr","line":13,"locations":[{"start":{"line":13,"column":43},"end":{"line":13,"column":44}},{"start":{"line":13,"column":51},"end":{"line":13,"column":52}}]}},"fnMap":{"1":{"name":"alpha","line":10,"loc":{"start":{"line":10,"column":0},"end":{"line":14,"column":1}}}}};
};
require("kaoscript/register");
module.exports = function() {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].s[1]++;
	var Float = require("./_float.ks")().Float;
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].s[2]++;
	var {Number, __ks_Number} = require("./_number.ks")();
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].s[3]++;
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].s[4]++;
	function alpha() {
		if(arguments.length < 1) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
		}
		let __ks_i = -1;
		let n = arguments[++__ks_i];
		if(n === void 0) {
			n = null;
		}
		let __ks__;
		let percentage = arguments.length > 1 && (__ks__ = arguments[++__ks_i]) !== void 0 && __ks__ !== null ? __ks__ : false;
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].f[1]++;
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].s[5]++;
		let i = Float.parse(n);
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].s[6]++;
		return isNaN(i) ? (__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].b[1][0]++, 1) : (__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].b[1][1]++, (percentage ? (__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].b[2][0]++, i / 100) : (__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/xample.alpha.ks"].b[2][1]++, i)).limit(0, 1).round(3));
	}
}