var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_integer.ks"]) {
	__ks_coverage["/fixtures/compile/_integer.ks"] = {"path":"/fixtures/compile/_integer.ks","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":15}},"2":{"start":{"line":3,"column":0},"end":{"line":7,"column":1}},"3":{"start":{"line":5,"column":2},"end":{"line":5,"column":31}}},"branchMap":{},"fnMap":{"1":{"name":"(anonymous_1)","line":4,"loc":{"start":{"line":4,"column":6},"end":{"line":6,"column":2}}}}};
};
module.exports = function() {
	__ks_coverage["/fixtures/compile/_integer.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_integer.ks"].s[2]++;
	let Integer = {
		parse(value, radix) {
			if(arguments.length < 2) {
				throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 2)");
			}
			if(value === void 0) {
				value = null;
			}
			if(radix === void 0) {
				radix = null;
			}
			__ks_coverage["/fixtures/compile/_integer.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/_integer.ks"].s[3]++;
			return parseInt(value, radix);
		}
	};
	return {
		Integer: Integer
	};
};