var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/function.curry.arg.ks"]) {
	__ks_coverage["/fixtures/compile/function.curry.arg.ks"] = {"path":"/fixtures/compile/function.curry.arg.ks","s":{"1":0,"2":0,"3":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":1}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":48}},"3":{"start":{"line":7,"column":0},"end":{"line":7,"column":10}}},"branchMap":{},"fnMap":{}};
};
var Helper = require("@kaoscript/runtime").Helper;
module.exports = function() {
	__ks_coverage["/fixtures/compile/function.curry.arg.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/function.curry.arg.ks"].s[2]++;
	let log = Helper.vcurry(console.log, console, ...["hello: "]);
	__ks_coverage["/fixtures/compile/function.curry.arg.ks"].s[3]++;
	log("foo");
};