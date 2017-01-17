var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/delete.property.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/delete.property.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/delete.property.ks","s":{"1":0,"2":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":1}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":14}}},"branchMap":{},"fnMap":{}};
};
module.exports = function() {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/delete.property.ks"].s[1]++;
	let foo = {
		bar: "qux"
	};
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/delete.property.ks"].s[2]++;
	delete foo.bar;
}