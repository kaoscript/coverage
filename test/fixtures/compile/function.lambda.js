var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.lambda.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.lambda.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.lambda.ks","s":{"1":0,"2":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":41}},"2":{"start":{"line":1,"column":38},"end":{"line":1,"column":39}}},"branchMap":{},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":41}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.lambda.ks"].s[1]++;
	const foo = function(a, b) {
		if(a === undefined || a === null) {
			throw new Error("Missing parameter 'a'");
		}
		if(!Type.isNumber(a)) {
			throw new Error("Invalid type for parameter 'a'");
		}
		if(b === undefined || b === null) {
			throw new Error("Missing parameter 'b'");
		}
		if(!Type.isNumber(b)) {
			throw new Error("Invalid type for parameter 'b'");
		}
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.lambda.ks"].f[1]++;
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/function.lambda.ks"].s[2]++;
		return a - b;
	};
}