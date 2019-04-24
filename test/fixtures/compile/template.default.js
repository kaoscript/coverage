var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/template.default.ks"]) {
	__ks_coverage["/fixtures/compile/template.default.ks"] = {"path":"/fixtures/compile/template.default.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":14}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":13}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":10}},"4":{"start":{"line":6,"column":0},"end":{"line":6,"column":23}}},"branchMap":{},"fnMap":{}};
};
module.exports = function() {
	__ks_coverage["/fixtures/compile/template.default.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/template.default.ks"].s[2]++;
	let d = "foo";
	__ks_coverage["/fixtures/compile/template.default.ks"].s[3]++;
	let u = 42;
	__ks_coverage["/fixtures/compile/template.default.ks"].s[4]++;
	console.log(d + u);
};