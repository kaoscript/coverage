var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/if.assign.we.ks"]) {
	__ks_coverage["/fixtures/compile/if.assign.we.ks"] = {"path":"/fixtures/compile/if.assign.we.ks","s":{"1":0,"2":0},"b":{"1":[0,0]},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":9}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":22}}},"branchMap":{"1":{"type":"cond-expr","line":3,"locations":[{"start":{"line":3,"column":4},"end":{"line":3,"column":5}},{"start":{"line":3,"column":21},"end":{"line":3,"column":22}}]}},"fnMap":{}};
};
module.exports = function() {
	__ks_coverage["/fixtures/compile/if.assign.we.ks"].s[1]++;
	let x = 0;
	__ks_coverage["/fixtures/compile/if.assign.we.ks"].s[2]++;
	let y = (x === 0) ? (__ks_coverage["/fixtures/compile/if.assign.we.ks"].b[1][0]++, 1) : (__ks_coverage["/fixtures/compile/if.assign.we.ks"].b[1][1]++, 8);
};