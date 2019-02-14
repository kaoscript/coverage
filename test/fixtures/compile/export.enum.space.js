var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/export.enum.space.ks"]) {
	__ks_coverage["/fixtures/compile/export.enum.space.ks"] = {"path":"/fixtures/compile/export.enum.space.ks","s":{"1":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":4,"column":1}}},"branchMap":{},"fnMap":{}};
};
module.exports = function() {
	__ks_coverage["/fixtures/compile/export.enum.space.ks"].s[1]++;
	let Space = {
		RGB: "rgb",
		SRGB: "srgb"
	};
	return {
		Space: Space
	};
};