var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/if.const.default.ks"]) {
	__ks_coverage["/fixtures/compile/if.const.default.ks"] = {"path":"/fixtures/compile/if.const.default.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{"1":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":14}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":33}},"3":{"start":{"line":3,"column":25},"end":{"line":3,"column":33}},"4":{"start":{"line":5,"column":0},"end":{"line":7,"column":1}},"5":{"start":{"line":6,"column":1},"end":{"line":6,"column":20}}},"branchMap":{"1":{"type":"if","line":5,"locations":[{"start":{"line":5,"column":0},"end":{"line":5,"column":0}},{"start":{"line":5,"column":0},"end":{"line":5,"column":0}}]}},"fnMap":{"1":{"name":"foobar","line":3,"loc":{"start":{"line":3,"column":0},"end":{"line":3,"column":33}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/if.const.default.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/if.const.default.ks"].s[2]++;
	function foobar() {
		__ks_coverage["/fixtures/compile/if.const.default.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/if.const.default.ks"].s[3]++;
		return "foobar";
	}
	__ks_coverage["/fixtures/compile/if.const.default.ks"].s[4]++;
	let x;
	if(Type.isValue(x = foobar())) {
		__ks_coverage["/fixtures/compile/if.const.default.ks"].b[1][0]++;
		__ks_coverage["/fixtures/compile/if.const.default.ks"].s[5]++;
		console.log(x);
	}
};