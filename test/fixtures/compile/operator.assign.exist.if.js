var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/operator.assign.exist.if.ks"]) {
	__ks_coverage["/fixtures/compile/operator.assign.exist.if.ks"] = {"path":"/fixtures/compile/operator.assign.exist.if.ks","s":{"1":0,"2":0,"3":0},"b":{"1":[0,0],"2":[0,0]},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":16}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":7}},"3":{"start":{"line":4,"column":0},"end":{"line":5,"column":1}}},"branchMap":{"1":{"type":"if","line":4,"locations":[{"start":{"line":4,"column":0},"end":{"line":4,"column":0}},{"start":{"line":4,"column":0},"end":{"line":4,"column":0}}]},"2":{"type":"binary-expr","line":4,"locations":[{"start":{"line":4,"column":3},"end":{"line":4,"column":7}},{"start":{"line":4,"column":11},"end":{"line":4,"column":23}}]}},"fnMap":{}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/operator.assign.exist.if.ks"].s[1]++;
	let foo = "otto";
	__ks_coverage["/fixtures/compile/operator.assign.exist.if.ks"].s[2]++;
	let bar = null;
	__ks_coverage["/fixtures/compile/operator.assign.exist.if.ks"].s[3]++;
	if((__ks_coverage["/fixtures/compile/operator.assign.exist.if.ks"].b[2][0]++, true) && (__ks_coverage["/fixtures/compile/operator.assign.exist.if.ks"].b[2][1]++, Type.isValue(foo) ? (bar = foo, true) : false)) {
		__ks_coverage["/fixtures/compile/operator.assign.exist.if.ks"].b[1][0]++;
	}
};