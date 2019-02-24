var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"]) {
	__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"] = {"path":"/fixtures/compile/operator.assign.exist.multi.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":14}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":22}},"3":{"start":{"line":3,"column":16},"end":{"line":3,"column":22}},"4":{"start":{"line":4,"column":0},"end":{"line":4,"column":22}},"5":{"start":{"line":4,"column":16},"end":{"line":4,"column":22}},"6":{"start":{"line":6,"column":0},"end":{"line":11,"column":1}},"7":{"start":{"line":7,"column":1},"end":{"line":7,"column":15}},"8":{"start":{"line":9,"column":5},"end":{"line":11,"column":1}},"9":{"start":{"line":10,"column":1},"end":{"line":10,"column":15}}},"branchMap":{"1":{"type":"if","line":6,"locations":[{"start":{"line":6,"column":0},"end":{"line":6,"column":0}},{"start":{"line":6,"column":0},"end":{"line":6,"column":0}}]},"2":{"type":"if","line":9,"locations":[{"start":{"line":9,"column":5},"end":{"line":9,"column":5}},{"start":{"line":9,"column":5},"end":{"line":9,"column":5}}]}},"fnMap":{"1":{"name":"(anonymous_1)","line":3,"loc":{"start":{"line":3,"column":10},"end":{"line":3,"column":22}}},"2":{"name":"(anonymous_2)","line":4,"loc":{"start":{"line":4,"column":10},"end":{"line":4,"column":22}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].s[2]++;
	let foo = function() {
		__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].s[3]++;
		return "otto";
	};
	__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].s[4]++;
	let qux = function() {
		__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].f[2]++;
		__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].s[5]++;
		return "itti";
	};
	__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].s[6]++;
	let x, __ks_0;
	if(Type.isValue(__ks_0 = foo()) ? (x = __ks_0, true) : false) {
		__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].b[1][0]++;
		__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].s[7]++;
		console.log(x);
	}
	else {
		__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].b[1][1]++;
		__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].s[8]++;
		if(Type.isValue(__ks_0 = qux()) ? (x = __ks_0, true) : false) {
			__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].b[2][0]++;
			__ks_coverage["/fixtures/compile/operator.assign.exist.multi.ks"].s[9]++;
			console.log(x);
		}
	}
};