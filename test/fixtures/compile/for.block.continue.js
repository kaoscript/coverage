var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/for.block.continue.ks"]) {
	__ks_coverage["/fixtures/compile/for.block.continue.ks"] = {"path":"/fixtures/compile/for.block.continue.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{"1":[0,0]},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":1}},"2":{"start":{"line":5,"column":0},"end":{"line":11,"column":1}},"3":{"start":{"line":6,"column":1},"end":{"line":8,"column":2}},"4":{"start":{"line":7,"column":2},"end":{"line":7,"column":10}},"5":{"start":{"line":10,"column":1},"end":{"line":10,"column":15}}},"branchMap":{"1":{"type":"if","line":6,"locations":[{"start":{"line":6,"column":1},"end":{"line":6,"column":1}},{"start":{"line":6,"column":1},"end":{"line":6,"column":1}}]}},"fnMap":{}};
};
module.exports = function() {
	__ks_coverage["/fixtures/compile/for.block.continue.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/for.block.continue.ks"].s[2]++;
	for(let x = 0; x <= 10; x += 2) {
		__ks_coverage["/fixtures/compile/for.block.continue.ks"].s[3]++;
		if(x > 5) {
			__ks_coverage["/fixtures/compile/for.block.continue.ks"].b[1][0]++;
			__ks_coverage["/fixtures/compile/for.block.continue.ks"].s[4]++;
			continue;
		}
		__ks_coverage["/fixtures/compile/for.block.continue.ks"].s[5]++;
		console.log(x);
	}
}