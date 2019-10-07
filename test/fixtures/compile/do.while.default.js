var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/do.while.default.ks"]) {
	__ks_coverage["/fixtures/compile/do.while.default.ks"] = {"path":"/fixtures/compile/do.while.default.ks","s":{"1":0,"2":0,"3":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":5,"column":1}},"2":{"start":{"line":7,"column":0},"end":{"line":10,"column":21}},"3":{"start":{"line":8,"column":1},"end":{"line":8,"column":6}}},"branchMap":{},"fnMap":{}};
};
var Operator = require("@kaoscript/runtime").Operator;
module.exports = function() {
	__ks_coverage["/fixtures/compile/do.while.default.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/do.while.default.ks"].s[2]++;
	do {
		__ks_coverage["/fixtures/compile/do.while.default.ks"].s[3]++;
		buy();
	}
	while(Operator.gt(supply, demand))
};