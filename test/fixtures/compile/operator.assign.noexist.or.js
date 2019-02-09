var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/operator.assign.noexist.or.ks"]) {
	__ks_coverage["/fixtures/compile/operator.assign.noexist.or.ks"] = {"path":"/fixtures/compile/operator.assign.noexist.or.ks","s":{"1":0,"2":0},"b":{"1":[0,0]},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":55}}},"branchMap":{"1":{"type":"binary-expr","line":3,"locations":[{"start":{"line":3,"column":12},"end":{"line":3,"column":37}},{"start":{"line":3,"column":41},"end":{"line":3,"column":55}}]}},"fnMap":{}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/operator.assign.noexist.or.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/operator.assign.noexist.or.ks"].s[2]++;
	let bar, __ks_0;
	const foo = (__ks_coverage["/fixtures/compile/operator.assign.noexist.or.ks"].b[1][0]++, Type.isValue(__ks_0 = qux.getFoobar()) ? (bar = __ks_0, false) : true) || (__ks_coverage["/fixtures/compile/operator.assign.noexist.or.ks"].b[1][1]++, bar.isFoobar());
};