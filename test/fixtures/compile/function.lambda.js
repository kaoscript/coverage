var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/function.lambda.ks"]) {
	__ks_coverage["/fixtures/compile/function.lambda.ks"] = {"path":"/fixtures/compile/function.lambda.ks","s":{"1":0,"2":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":41}},"2":{"start":{"line":1,"column":38},"end":{"line":1,"column":39}}},"branchMap":{},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":41}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/function.lambda.ks"].s[1]++;
	const foo = function(a, b) {
		if(arguments.length < 2) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 2)");
		}
		if(a === void 0 || a === null) {
			throw new TypeError("'a' is not nullable");
		}
		else if(!Type.isNumber(a)) {
			throw new TypeError("'a' is not of type 'Number'");
		}
		if(b === void 0 || b === null) {
			throw new TypeError("'b' is not nullable");
		}
		else if(!Type.isNumber(b)) {
			throw new TypeError("'b' is not of type 'Number'");
		}
		__ks_coverage["/fixtures/compile/function.lambda.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/function.lambda.ks"].s[2]++;
		return a - b;
	};
}