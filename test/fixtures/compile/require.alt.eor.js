var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":33}},"2":{"start":{"line":3,"column":0},"end":{"line":22,"column":1}},"3":{"start":{"line":5,"column":2},"end":{"line":5,"column":39}},"4":{"start":{"line":8,"column":2},"end":{"line":19,"column":3}},"5":{"start":{"line":9,"column":3},"end":{"line":11,"column":4}},"6":{"start":{"line":10,"column":4},"end":{"line":10,"column":22}},"7":{"start":{"line":14,"column":3},"end":{"line":18,"column":4}},"8":{"start":{"line":15,"column":4},"end":{"line":17,"column":5}},"9":{"start":{"line":16,"column":5},"end":{"line":16,"column":20}},"10":{"start":{"line":20,"column":2},"end":{"line":20,"column":13}},"11":{"start":{"line":24,"column":0},"end":{"line":24,"column":12}}},"branchMap":{"1":{"type":"if","line":8,"locations":[{"start":{"line":8,"column":2},"end":{"line":8,"column":2}},{"start":{"line":8,"column":2},"end":{"line":8,"column":2}}]},"2":{"type":"if","line":9,"locations":[{"start":{"line":9,"column":3},"end":{"line":9,"column":3}},{"start":{"line":9,"column":3},"end":{"line":9,"column":3}}]},"3":{"type":"if","line":15,"locations":[{"start":{"line":15,"column":4},"end":{"line":15,"column":4}},{"start":{"line":15,"column":4},"end":{"line":15,"column":4}}]}},"fnMap":{"1":{"name":"contains","line":4,"loc":{"start":{"line":4,"column":1},"end":{"line":6,"column":2}}},"2":{"name":"pushUniq","line":7,"loc":{"start":{"line":7,"column":1},"end":{"line":21,"column":2}}}}};
};
var {Helper, Type} = require("@kaoscript/runtime");
function __ks_require(__ks_0, __ks___ks_0) {
	if(Type.isValue(Array)) {
		return [Array, typeof __ks_Array === "undefined" ? {} : __ks_Array];
	}
	else {
		return [__ks_0, __ks___ks_0];
	}
}
module.exports = function(__ks_0, __ks___ks_0) {
	var [Array, __ks_Array] = __ks_require(__ks_0, __ks___ks_0);
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[1]++;
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[2]++;
	Helper.newInstanceMethod({
		class: Array,
		name: "contains",
		sealed: __ks_Array,
		function: function() {
			if(arguments.length < 1) {
				throw new Error("Wrong number of arguments");
			}
			let __ks_i = -1;
			var item = arguments[++__ks_i];
			if(arguments.length > 1) {
				var from = arguments[++__ks_i];
			}
			else {
				var from = 0;
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].f[1]++;
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[3]++;
			return this.indexOf(item, from) !== -1;
		},
		signature: {
			access: 3,
			min: 1,
			max: 2,
			parameters: [
				{
					type: "Any",
					min: 1,
					max: 2
				}
			]
		}
	});
	Helper.newInstanceMethod({
		class: Array,
		name: "pushUniq",
		sealed: __ks_Array,
		function: function(...args) {
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].f[2]++;
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[4]++;
			if(args.length === 1) {
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].b[1][0]++;
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[5]++;
				if(!__ks_Array._im_contains(this, args[0])) {
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].b[2][0]++;
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[6]++;
					this.push(args[0]);
				}
			}
			else {
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].b[1][1]++;
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[7]++;
				for(let __ks_1 = 0, __ks_2 = args.length, item; __ks_1 < __ks_2; ++__ks_1) {
					item = args[__ks_1];
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[8]++;
					if(!__ks_Array._im_contains(this, item)) {
						__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].b[3][0]++;
						__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[9]++;
						this.push(item);
					}
				}
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[10]++;
			return this;
		},
		signature: {
			access: 3,
			min: 1,
			max: Infinity,
			parameters: [
				{
					type: "Any",
					min: 1,
					max: Infinity
				}
			]
		}
	});
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/require.alt.eor.ks"].s[11]++;
	return {
		Array: Array,
		__ks_Array: __ks_Array
	};
}