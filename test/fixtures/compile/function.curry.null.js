var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.curry.null.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.curry.null.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.curry.null.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":1}},"2":{"start":{"line":5,"column":0},"end":{"line":7,"column":1}},"3":{"start":{"line":6,"column":1},"end":{"line":6,"column":21}},"4":{"start":{"line":9,"column":0},"end":{"line":9,"column":36}},"5":{"start":{"line":11,"column":0},"end":{"line":11,"column":15}}},"branchMap":{},"fnMap":{"1":{"name":"log","line":5,"loc":{"start":{"line":5,"column":0},"end":{"line":7,"column":1}}}}};
};
var Helper = require("@kaoscript/runtime").Helper;
module.exports = function() {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.curry.null.ks"].s[1]++;
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.curry.null.ks"].s[2]++;
	function log(...args) {
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.curry.null.ks"].f[1]++;
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.curry.null.ks"].s[3]++;
		console.log.apply(console, args);
	}
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.curry.null.ks"].s[4]++;
	let logHello = Helper.curry(log, null, ["hello: "]);
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.curry.null.ks"].s[5]++;
	logHello("foo");
}