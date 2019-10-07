var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/object.shorthand.default.ks"]) {
	__ks_coverage["/fixtures/compile/object.shorthand.default.ks"] = {"path":"/fixtures/compile/object.shorthand.default.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":9}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":10}},"3":{"start":{"line":3,"column":0},"end":{"line":3,"column":9}},"4":{"start":{"line":5,"column":0},"end":{"line":5,"column":21}}},"branchMap":{},"fnMap":{}};
};
var Dictionary = require("@kaoscript/runtime").Dictionary;
module.exports = function() {
	__ks_coverage["/fixtures/compile/object.shorthand.default.ks"].s[1]++;
	let x = 2;
	__ks_coverage["/fixtures/compile/object.shorthand.default.ks"].s[2]++;
	let y = -1;
	__ks_coverage["/fixtures/compile/object.shorthand.default.ks"].s[3]++;
	let z = 1;
	__ks_coverage["/fixtures/compile/object.shorthand.default.ks"].s[4]++;
	const foo = (() => {
		const d = new Dictionary();
		d.x = x;
		d.y = y;
		d.z = z;
		return d;
	})();
};