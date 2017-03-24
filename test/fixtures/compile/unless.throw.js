var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/unless.throw.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/unless.throw.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/unless.throw.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{"1":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}},"2":{"start":{"line":3,"column":0},"end":{"line":5,"column":1}},"3":{"start":{"line":4,"column":1},"end":{"line":4,"column":27}},"4":{"start":{"line":4,"column":1},"end":{"line":4,"column":18}}},"branchMap":{"1":{"type":"if","line":4,"locations":[{"start":{"line":4,"column":1},"end":{"line":4,"column":1}},{"start":{"line":4,"column":1},"end":{"line":4,"column":1}}]}},"fnMap":{"1":{"name":"foo","line":3,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":1}}}}};
};
module.exports = function() {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/unless.throw.ks"].s[1]++;
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/unless.throw.ks"].s[2]++;
	function foo(x) {
		if(arguments.length < 1) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
		}
		if(x === void 0 || x === null) {
			throw new TypeError("'x' is not nullable");
		}
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/unless.throw.ks"].f[1]++;
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/unless.throw.ks"].s[3]++;
		if(!x) {
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/unless.throw.ks"].b[1][0]++;
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/unless.throw.ks"].s[4]++;
			throw new Error();
		}
	}
}