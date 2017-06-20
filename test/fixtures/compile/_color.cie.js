var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_color.cie.ks"]) {
	__ks_coverage["/fixtures/compile/_color.cie.ks"] = {"path":"/fixtures/compile/_color.cie.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":20}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":29}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":29}},"4":{"start":{"line":6,"column":0},"end":{"line":6,"column":43}}},"branchMap":{},"fnMap":{}};
};
module.exports = function(Color, Space) {
	__ks_coverage["/fixtures/compile/_color.cie.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_color.cie.ks"].s[2]++;
	let ColorCIE = Color + "+cie";
	__ks_coverage["/fixtures/compile/_color.cie.ks"].s[3]++;
	let SpaceCIE = Space + "+cie";
	__ks_coverage["/fixtures/compile/_color.cie.ks"].s[4]++;
	return {
		Color: ColorCIE,
		Space: SpaceCIE
	};
}