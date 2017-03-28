var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/xample.array.remove.ks"]) {
	__ks_coverage["/fixtures/compile/xample.array.remove.ks"] = {"path":"/fixtures/compile/xample.array.remove.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":25}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":14}},"3":{"start":{"line":5,"column":0},"end":{"line":24,"column":1}},"4":{"start":{"line":7,"column":2},"end":{"line":20,"column":3}},"5":{"start":{"line":8,"column":3},"end":{"line":8,"column":22}},"6":{"start":{"line":10,"column":3},"end":{"line":12,"column":4}},"7":{"start":{"line":11,"column":4},"end":{"line":11,"column":21}},"8":{"start":{"line":15,"column":3},"end":{"line":19,"column":4}},"9":{"start":{"line":16,"column":4},"end":{"line":18,"column":5}},"10":{"start":{"line":17,"column":5},"end":{"line":17,"column":22}},"11":{"start":{"line":22,"column":2},"end":{"line":22,"column":13}}},"branchMap":{"1":{"type":"if","line":7,"locations":[{"start":{"line":7,"column":2},"end":{"line":7,"column":2}},{"start":{"line":7,"column":2},"end":{"line":7,"column":2}}]},"2":{"type":"if","line":10,"locations":[{"start":{"line":10,"column":54},"end":{"line":10,"column":54}},{"start":{"line":10,"column":54},"end":{"line":10,"column":54}}]},"3":{"type":"if","line":16,"locations":[{"start":{"line":16,"column":55},"end":{"line":16,"column":55}},{"start":{"line":16,"column":55},"end":{"line":16,"column":55}}]}},"fnMap":{"1":{"name":"remove","line":6,"loc":{"start":{"line":6,"column":1},"end":{"line":23,"column":2}}}}};
};
require("kaoscript/register");
var Helper = require("@kaoscript/runtime").Helper;
module.exports = function() {
	__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[1]++;
	var {Array, __ks_Array} = require("./_array.ks")();
	__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[2]++;
	__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[3]++;
	Helper.newInstanceMethod({
		class: Array,
		name: "remove",
		sealed: __ks_Array,
		function: function(...items) {
			__ks_coverage["/fixtures/compile/xample.array.remove.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[4]++;
			if(items.length === 1) {
				__ks_coverage["/fixtures/compile/xample.array.remove.ks"].b[1][0]++;
				__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[5]++;
				let item = items[0];
				__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[6]++;
				for(let i = this.length - 1; i >= 0; --i) {
					if(this[i] === item) {
						__ks_coverage["/fixtures/compile/xample.array.remove.ks"].b[2][0]++;
						__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[7]++;
						this.splice(i, 1);
					}
				}
			}
			else {
				__ks_coverage["/fixtures/compile/xample.array.remove.ks"].b[1][1]++;
				__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[8]++;
				for(let __ks_0 = 0, __ks_1 = items.length, item; __ks_0 < __ks_1; ++__ks_0) {
					item = items[__ks_0];
					__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[9]++;
					for(let i = this.length - 1; i >= 0; --i) {
						if(this[i] === item) {
							__ks_coverage["/fixtures/compile/xample.array.remove.ks"].b[3][0]++;
							__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[10]++;
							this.splice(i, 1);
						}
					}
				}
			}
			__ks_coverage["/fixtures/compile/xample.array.remove.ks"].s[11]++;
			return this;
		},
		signature: {
			access: 3,
			min: 0,
			max: Infinity,
			parameters: [
				{
					type: "Any",
					min: 0,
					max: Infinity
				}
			]
		}
	});
}