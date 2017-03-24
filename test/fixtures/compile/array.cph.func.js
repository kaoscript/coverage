var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/array.cph.func.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/array.cph.func.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/array.cph.func.ks","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":5,"column":1}},"2":{"start":{"line":7,"column":0},"end":{"line":9,"column":1}},"3":{"start":{"line":8,"column":1},"end":{"line":8,"column":59}}},"branchMap":{},"fnMap":{"1":{"name":"spicyHeroes","line":7,"loc":{"start":{"line":7,"column":0},"end":{"line":9,"column":1}}}}};
};
var Helper = require("@kaoscript/runtime").Helper;
module.exports = function() {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/array.cph.func.ks"].s[1]++;
	let likes = {
		leto: "spice",
		paul: "chani",
		duncan: "murbella"
	};
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/array.cph.func.ks"].s[2]++;
	function spicyHeroes() {
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/array.cph.func.ks"].f[1]++;
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/array.cph.func.ks"].s[3]++;
		return Helper.mapObject(likes, function(hero, like) {
			return hero;
		}, function(hero, like) {
			return like === "spice";
		});
	}
}