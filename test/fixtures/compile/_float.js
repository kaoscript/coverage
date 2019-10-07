var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_float.ks"]) {
	__ks_coverage["/fixtures/compile/_float.ks"] = {"path":"/fixtures/compile/_float.ks","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":17}},"2":{"start":{"line":3,"column":0},"end":{"line":7,"column":1}},"3":{"start":{"line":5,"column":2},"end":{"line":5,"column":26}}},"branchMap":{},"fnMap":{"1":{"name":"(anonymous_1)","line":4,"loc":{"start":{"line":4,"column":6},"end":{"line":6,"column":2}}}}};
};
var Dictionary = require("@kaoscript/runtime").Dictionary;
module.exports = function() {
	__ks_coverage["/fixtures/compile/_float.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_float.ks"].s[2]++;
	let Float = (() => {
		const d = new Dictionary();
		d.parse = function(value) {
			if(arguments.length < 1) {
				throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
			}
			if(value === void 0) {
				value = null;
			}
			__ks_coverage["/fixtures/compile/_float.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/_float.ks"].s[3]++;
			return parseFloat(value);
		};
		return d;
	})();
	return {
		Float: Float
	};
};