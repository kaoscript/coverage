var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/throw.try.ks"]) {
	__ks_coverage["/fixtures/compile/throw.try.ks"] = {"path":"/fixtures/compile/throw.try.ks","s":{"1":0,"2":0,"3":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}},"2":{"start":{"line":3,"column":0},"end":{"line":5,"column":1}},"3":{"start":{"line":4,"column":1},"end":{"line":4,"column":18}}},"branchMap":{},"fnMap":{}};
};
module.exports = function() {
	__ks_coverage["/fixtures/compile/throw.try.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/throw.try.ks"].s[2]++;
	try {
		__ks_coverage["/fixtures/compile/throw.try.ks"].s[3]++;
		throw new Error();
	}
	catch(__ks_0) {
	}
}