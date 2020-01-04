var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_integer.ks"]) {
	__ks_coverage["/fixtures/compile/_integer.ks"] = {"path":"/fixtures/compile/_integer.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":15}},"2":{"start":{"line":3,"column":0},"end":{"line":5,"column":1}},"3":{"start":{"line":4,"column":1},"end":{"line":4,"column":80}},"4":{"start":{"line":4,"column":58},"end":{"line":4,"column":80}}},"branchMap":{},"fnMap":{"1":{"name":"parse","line":4,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":80}}}}};
};
var Helper = require("@kaoscript/runtime").Helper;
module.exports = function() {
	__ks_coverage["/fixtures/compile/_integer.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_integer.ks"].s[2]++;
	let Integer = Helper.namespace(function() {
		__ks_coverage["/fixtures/compile/_integer.ks"].s[3]++;
		function parse(value = null, radix = null) {
			__ks_coverage["/fixtures/compile/_integer.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/_integer.ks"].s[4]++;
			return parseInt(value, radix);
		}
		return {
			parse: parse
		};
	});
	return {
		Integer: Integer
	};
};