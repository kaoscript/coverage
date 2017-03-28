var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/enum.default.ks"]) {
	__ks_coverage["/fixtures/compile/enum.default.ks"] = {"path":"/fixtures/compile/enum.default.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":1}},"2":{"start":{"line":5,"column":0},"end":{"line":9,"column":1}},"3":{"start":{"line":11,"column":0},"end":{"line":11,"column":22}},"4":{"start":{"line":13,"column":0},"end":{"line":13,"column":18}}},"branchMap":{},"fnMap":{}};
};
module.exports = function() {
	__ks_coverage["/fixtures/compile/enum.default.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/enum.default.ks"].s[2]++;
	let Color = {
		Red: 0,
		Green: 1,
		Blue: 2
	};
	__ks_coverage["/fixtures/compile/enum.default.ks"].s[3]++;
	let color = Color.Red;
	__ks_coverage["/fixtures/compile/enum.default.ks"].s[4]++;
	console.log(color);
}