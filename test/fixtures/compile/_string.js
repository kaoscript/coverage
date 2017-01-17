var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":27}},"2":{"start":{"line":3,"column":0},"end":{"line":5,"column":1}},"3":{"start":{"line":7,"column":0},"end":{"line":22,"column":1}},"4":{"start":{"line":9,"column":2},"end":{"line":17,"column":3}},"5":{"start":{"line":10,"column":3},"end":{"line":10,"column":12}},"6":{"start":{"line":12,"column":7},"end":{"line":14,"column":3}},"7":{"start":{"line":13,"column":3},"end":{"line":13,"column":70}},"8":{"start":{"line":16,"column":3},"end":{"line":16,"column":39}},"9":{"start":{"line":20,"column":22},"end":{"line":20,"column":38}},"10":{"start":{"line":21,"column":29},"end":{"line":21,"column":49}},"11":{"start":{"line":24,"column":0},"end":{"line":24,"column":13}}},"branchMap":{"1":{"type":"if","line":9,"locations":[{"start":{"line":9,"column":2},"end":{"line":9,"column":2}},{"start":{"line":9,"column":2},"end":{"line":9,"column":2}}]},"2":{"type":"if","line":12,"locations":[{"start":{"line":12,"column":7},"end":{"line":12,"column":7}},{"start":{"line":12,"column":7},"end":{"line":12,"column":7}}]},"3":{"type":"binary-expr","line":16,"locations":[{"start":{"line":16,"column":10},"end":{"line":16,"column":33}},{"start":{"line":16,"column":37},"end":{"line":16,"column":39}}]}},"fnMap":{"1":{"name":"lines","line":8,"loc":{"start":{"line":8,"column":1},"end":{"line":18,"column":2}}},"2":{"name":"toFloat","line":20,"loc":{"start":{"line":20,"column":1},"end":{"line":20,"column":38}}},"3":{"name":"toInt","line":21,"loc":{"start":{"line":21,"column":1},"end":{"line":21,"column":49}}}}};
};
var Helper = require("@kaoscript/runtime").Helper;
module.exports = function() {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[1]++;
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[2]++;
	var __ks_String = {};
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[3]++;
	Helper.newInstanceMethod({
		class: String,
		name: "lines",
		sealed: __ks_String,
		function: function(emptyLines) {
			if(emptyLines === undefined || emptyLines === null) {
				emptyLines = false;
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].f[1]++;
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[4]++;
			if(this.length === 0) {
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].b[1][0]++;
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[5]++;
				return [];
			}
			else {
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].b[1][1]++;
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[6]++;
				if(emptyLines) {
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].b[2][0]++;
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[7]++;
					return this.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
				}
				else {
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].b[2][1]++;
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[8]++;
					return (__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].b[3][0]++, this.match(/[^\r\n]+/g)) || (__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].b[3][1]++, []);
				}
			}
		},
		signature: {
			access: 3,
			min: 0,
			max: 1,
			parameters: [
				{
					type: "Any",
					min: 0,
					max: 1
				}
			]
		}
	});
	Helper.newInstanceMethod({
		class: String,
		name: "lower",
		sealed: __ks_String,
		method: "toLowerCase",
		signature: {
			access: 3,
			min: 0,
			max: 0,
			parameters: []
		}
	});
	Helper.newInstanceMethod({
		class: String,
		name: "toFloat",
		sealed: __ks_String,
		function: function() {
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].f[2]++;
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[9]++;
			return parseFloat(this);
		},
		signature: {
			access: 3,
			min: 0,
			max: 0,
			parameters: []
		}
	});
	Helper.newInstanceMethod({
		class: String,
		name: "toInt",
		sealed: __ks_String,
		function: function(base) {
			if(base === undefined || base === null) {
				base = 10;
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].f[3]++;
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[10]++;
			return parseInt(this, base);
		},
		signature: {
			access: 3,
			min: 0,
			max: 1,
			parameters: [
				{
					type: "Any",
					min: 0,
					max: 1
				}
			]
		}
	});
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_string.ks"].s[11]++;
	return {
		String: String,
		__ks_String: __ks_String
	};
}