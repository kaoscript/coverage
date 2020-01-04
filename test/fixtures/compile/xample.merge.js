var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/xample.merge.ks"]) {
	__ks_coverage["/fixtures/compile/xample.merge.ks"] = {"path":"/fixtures/compile/xample.merge.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":25}},"2":{"start":{"line":3,"column":0},"end":{"line":28,"column":1}},"3":{"start":{"line":5,"column":2},"end":{"line":5,"column":11}},"4":{"start":{"line":6,"column":2},"end":{"line":6,"column":21}},"5":{"start":{"line":7,"column":2},"end":{"line":9,"column":3}},"6":{"start":{"line":8,"column":3},"end":{"line":8,"column":6}},"7":{"start":{"line":11,"column":2},"end":{"line":26,"column":3}},"8":{"start":{"line":12,"column":3},"end":{"line":12,"column":32}},"9":{"start":{"line":14,"column":3},"end":{"line":20,"column":4}},"10":{"start":{"line":15,"column":4},"end":{"line":19,"column":5}},"11":{"start":{"line":16,"column":5},"end":{"line":18,"column":6}},"12":{"start":{"line":17,"column":6},"end":{"line":17,"column":28}},"13":{"start":{"line":22,"column":3},"end":{"line":22,"column":16}},"14":{"start":{"line":25,"column":3},"end":{"line":25,"column":12}}},"branchMap":{"1":{"type":"binary-expr","line":7,"locations":[{"start":{"line":7,"column":8},"end":{"line":7,"column":13}},{"start":{"line":7,"column":17},"end":{"line":7,"column":37}}]},"2":{"type":"if","line":11,"locations":[{"start":{"line":11,"column":2},"end":{"line":11,"column":2}},{"start":{"line":11,"column":2},"end":{"line":11,"column":2}}]},"3":{"type":"if","line":15,"locations":[{"start":{"line":15,"column":4},"end":{"line":15,"column":4}},{"start":{"line":15,"column":4},"end":{"line":15,"column":4}}]}},"fnMap":{"1":{"name":"merge","line":4,"loc":{"start":{"line":4,"column":1},"end":{"line":27,"column":2}}}}};
};
var {Operator, Type} = require("@kaoscript/runtime");
module.exports = function() {
	__ks_coverage["/fixtures/compile/xample.merge.ks"].s[1]++;
	var __ks_Array = {};
	__ks_coverage["/fixtures/compile/xample.merge.ks"].s[2]++;
	__ks_Array.__ks_sttc_merge_0 = function(...args) {
		__ks_coverage["/fixtures/compile/xample.merge.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/xample.merge.ks"].s[3]++;
		let i = 0;
		__ks_coverage["/fixtures/compile/xample.merge.ks"].s[4]++;
		let l = args.length;
		__ks_coverage["/fixtures/compile/xample.merge.ks"].s[5]++;
		while((__ks_coverage["/fixtures/compile/xample.merge.ks"].b[1][0]++, Operator.lt(i, l)) && (__ks_coverage["/fixtures/compile/xample.merge.ks"].b[1][1]++, !Type.isArray(args[i]))) {
			__ks_coverage["/fixtures/compile/xample.merge.ks"].s[6]++;
			++i;
		}
		__ks_coverage["/fixtures/compile/xample.merge.ks"].s[7]++;
		if(Operator.lt(i, l)) {
			__ks_coverage["/fixtures/compile/xample.merge.ks"].b[2][0]++;
			__ks_coverage["/fixtures/compile/xample.merge.ks"].s[8]++;
			const source = args[i];
			__ks_coverage["/fixtures/compile/xample.merge.ks"].s[9]++;
			while(Operator.lt(++i, l)) {
				__ks_coverage["/fixtures/compile/xample.merge.ks"].s[10]++;
				if(Type.isArray(args[i])) {
					__ks_coverage["/fixtures/compile/xample.merge.ks"].b[3][0]++;
					__ks_coverage["/fixtures/compile/xample.merge.ks"].s[11]++;
					for(let __ks_0 = 0, __ks_1 = args[i].length, value; __ks_0 < __ks_1; ++__ks_0) {
						value = args[i][__ks_0];
						__ks_coverage["/fixtures/compile/xample.merge.ks"].s[12]++;
						source.pushUniq(value);
					}
				}
			}
			__ks_coverage["/fixtures/compile/xample.merge.ks"].s[13]++;
			return source;
		}
		else {
			__ks_coverage["/fixtures/compile/xample.merge.ks"].b[2][1]++;
			__ks_coverage["/fixtures/compile/xample.merge.ks"].s[14]++;
			return [];
		}
	};
	__ks_Array._cm_merge = function() {
		var args = Array.prototype.slice.call(arguments);
		return __ks_Array.__ks_sttc_merge_0.apply(null, args);
	};
};