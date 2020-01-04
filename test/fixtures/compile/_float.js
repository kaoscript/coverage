var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_float.ks"]) {
	__ks_coverage["/fixtures/compile/_float.ks"] = {"path":"/fixtures/compile/_float.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":17}},"2":{"start":{"line":3,"column":0},"end":{"line":5,"column":1}},"3":{"start":{"line":4,"column":1},"end":{"line":4,"column":61}},"4":{"start":{"line":4,"column":44},"end":{"line":4,"column":61}}},"branchMap":{},"fnMap":{"1":{"name":"parse","line":4,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":61}}}}};
};
var Helper = require("@kaoscript/runtime").Helper;
module.exports = function() {
	__ks_coverage["/fixtures/compile/_float.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_float.ks"].s[2]++;
	let Float = Helper.namespace(function() {
		__ks_coverage["/fixtures/compile/_float.ks"].s[3]++;
		function parse(value = null) {
			__ks_coverage["/fixtures/compile/_float.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/_float.ks"].s[4]++;
			return parseFloat(value);
		}
		return {
			parse: parse
		};
	});
	return {
		Float: Float
	};
};