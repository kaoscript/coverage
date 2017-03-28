var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/xample.pluck.when.ks"]) {
	__ks_coverage["/fixtures/compile/xample.pluck.when.ks"] = {"path":"/fixtures/compile/xample.pluck.when.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":25}},"2":{"start":{"line":3,"column":0},"end":{"line":19,"column":1}},"3":{"start":{"line":5,"column":2},"end":{"line":5,"column":17}},"4":{"start":{"line":7,"column":2},"end":{"line":7,"column":11}},"5":{"start":{"line":8,"column":2},"end":{"line":15,"column":3}},"6":{"start":{"line":9,"column":3},"end":{"line":14,"column":4}},"7":{"start":{"line":10,"column":4},"end":{"line":10,"column":48}},"8":{"start":{"line":10,"column":4},"end":{"line":10,"column":22}},"9":{"start":{"line":13,"column":4},"end":{"line":13,"column":22}},"10":{"start":{"line":17,"column":2},"end":{"line":17,"column":15}}},"branchMap":{"1":{"type":"if","line":8,"locations":[{"start":{"line":8,"column":30},"end":{"line":8,"column":30}},{"start":{"line":8,"column":30},"end":{"line":8,"column":30}}]},"2":{"type":"if","line":9,"locations":[{"start":{"line":9,"column":3},"end":{"line":9,"column":3}},{"start":{"line":9,"column":3},"end":{"line":9,"column":3}}]},"3":{"type":"if","line":10,"locations":[{"start":{"line":10,"column":4},"end":{"line":10,"column":4}},{"start":{"line":10,"column":4},"end":{"line":10,"column":4}}]}},"fnMap":{"1":{"name":"pluck","line":4,"loc":{"start":{"line":4,"column":1},"end":{"line":18,"column":2}}}}};
};
var {Helper, Type} = require("@kaoscript/runtime");
module.exports = function() {
	__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[1]++;
	var __ks_Array = {};
	__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[2]++;
	Helper.newInstanceMethod({
		class: Array,
		name: "pluck",
		sealed: __ks_Array,
		function: function(name) {
			if(arguments.length < 1) {
				throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
			}
			if(name === void 0 || name === null) {
				throw new TypeError("'name' is not nullable");
			}
			__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[3]++;
			let result = [];
			__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[4]++;
			let value;
			__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[5]++;
			for(let __ks_0 = 0, __ks_1 = this.length, item; __ks_0 < __ks_1; ++__ks_0) {
				item = this[__ks_0];
				if(Type.isValue(item) && Type.isValue(item[name]) ? (value = item[name], true) : false) {
					__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].b[1][0]++;
					__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[6]++;
					if(Type.isFunction(value)) {
						__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].b[2][0]++;
						__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[7]++;
						let __ks_2;
						if(Type.isValue(__ks_2 = value.call(item)) ? (value = __ks_2, true) : false) {
							__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].b[3][0]++;
							__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[8]++;
							result.push(value);
						}
					}
					else {
						__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].b[2][1]++;
						__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[9]++;
						result.push(value);
					}
				}
			}
			__ks_coverage["/fixtures/compile/xample.pluck.when.ks"].s[10]++;
			return result;
		},
		signature: {
			access: 3,
			min: 1,
			max: 1,
			parameters: [
				{
					type: "Any",
					min: 1,
					max: 1
				}
			]
		}
	});
}