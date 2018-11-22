var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/macro.times.ks"]) {
	__ks_coverage["/fixtures/compile/macro.times.ks"] = {"path":"/fixtures/compile/macro.times.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":14}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":29}},"3":{"start":{"line":5,"column":0},"end":{"line":5,"column":28}},"4":{"start":{"line":7,"column":0},"end":{"line":7,"column":32}},"5":{"start":{"line":9,"column":0},"end":{"line":9,"column":10}},"6":{"start":{"line":10,"column":0},"end":{"line":10,"column":9}},"7":{"start":{"line":12,"column":0},"end":{"line":12,"column":31}}},"branchMap":{},"fnMap":{}};
};
module.exports = function() {
	__ks_coverage["/fixtures/compile/macro.times.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/macro.times.ks"].s[2]++;
	__ks_coverage["/fixtures/compile/macro.times.ks"].s[3]++;
	console.log(5 * 42);
	__ks_coverage["/fixtures/compile/macro.times.ks"].s[4]++;
	console.log(5 * 21 * 2);
	__ks_coverage["/fixtures/compile/macro.times.ks"].s[5]++;
	let i = 42;
	__ks_coverage["/fixtures/compile/macro.times.ks"].s[6]++;
	let t = 2;
	__ks_coverage["/fixtures/compile/macro.times.ks"].s[7]++;
	console.log(5 * i * t);
};