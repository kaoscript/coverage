var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/array.range.default.ks"]) {
	__ks_coverage["/fixtures/compile/array.range.default.ks"] = {"path":"/fixtures/compile/array.range.default.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":14}},"2":{"start":{"line":4,"column":0},"end":{"line":4,"column":15}},"3":{"start":{"line":7,"column":0},"end":{"line":7,"column":15}},"4":{"start":{"line":10,"column":0},"end":{"line":10,"column":16}},"5":{"start":{"line":13,"column":0},"end":{"line":13,"column":17}},"6":{"start":{"line":16,"column":0},"end":{"line":16,"column":19}},"7":{"start":{"line":19,"column":0},"end":{"line":19,"column":14}},"8":{"start":{"line":22,"column":0},"end":{"line":22,"column":17}},"9":{"start":{"line":25,"column":0},"end":{"line":25,"column":19}}},"branchMap":{},"fnMap":{}};
};
var Helper = require("@kaoscript/runtime").Helper;
module.exports = function() {
	__ks_coverage["/fixtures/compile/array.range.default.ks"].s[1]++;
	let a = Helper.newArrayRange(1, 5, 1, true, true);
	__ks_coverage["/fixtures/compile/array.range.default.ks"].s[2]++;
	let b = Helper.newArrayRange(1, 5, 1, true, false);
	__ks_coverage["/fixtures/compile/array.range.default.ks"].s[3]++;
	let c = Helper.newArrayRange(1, 5, 1, false, true);
	__ks_coverage["/fixtures/compile/array.range.default.ks"].s[4]++;
	let d = Helper.newArrayRange(1, 5, 1, false, false);
	__ks_coverage["/fixtures/compile/array.range.default.ks"].s[5]++;
	let e = Helper.newArrayRange(1, 6, 2, true, true);
	__ks_coverage["/fixtures/compile/array.range.default.ks"].s[6]++;
	let f = Helper.newArrayRange(1, 6, 2, false, false);
	__ks_coverage["/fixtures/compile/array.range.default.ks"].s[7]++;
	let g = Helper.newArrayRange(5, 1, 1, true, true);
	__ks_coverage["/fixtures/compile/array.range.default.ks"].s[8]++;
	let h = Helper.newArrayRange(5, 1, 2, true, true);
	__ks_coverage["/fixtures/compile/array.range.default.ks"].s[9]++;
	let i = Helper.newArrayRange(1, 2, 0.3, true, true);
};