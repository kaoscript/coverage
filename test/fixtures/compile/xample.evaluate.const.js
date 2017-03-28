var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"]) {
	__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"] = {"path":"/fixtures/compile/xample.evaluate.const.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":1}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":11}},"3":{"start":{"line":7,"column":0},"end":{"line":19,"column":1}},"4":{"start":{"line":9,"column":2},"end":{"line":9,"column":27}},"5":{"start":{"line":11,"column":2},"end":{"line":16,"column":3}},"6":{"start":{"line":12,"column":3},"end":{"line":12,"column":55}},"7":{"start":{"line":15,"column":3},"end":{"line":15,"column":21}},"8":{"start":{"line":18,"column":67},"end":{"line":18,"column":70}}},"branchMap":{"1":{"type":"if","line":11,"locations":[{"start":{"line":11,"column":2},"end":{"line":11,"column":2}},{"start":{"line":11,"column":2},"end":{"line":11,"column":2}}]},"2":{"type":"binary-expr","line":11,"locations":[{"start":{"line":11,"column":5},"end":{"line":11,"column":33}},{"start":{"line":11,"column":37},"end":{"line":11,"column":58}}]},"3":{"type":"binary-expr","line":18,"locations":[{"start":{"line":18,"column":51},"end":{"line":18,"column":53}},{"start":{"line":18,"column":98},"end":{"line":18,"column":100}}]}},"fnMap":{"1":{"name":"evaluate","line":8,"loc":{"start":{"line":8,"column":1},"end":{"line":17,"column":2}}},"2":{"name":"startsWith","line":18,"loc":{"start":{"line":18,"column":1},"end":{"line":18,"column":106}}}}};
};
var {Helper, Type} = require("@kaoscript/runtime");
module.exports = function() {
	__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].s[1]++;
	var __ks_String = {};
	__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].s[2]++;
	__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].s[3]++;
	Helper.newInstanceMethod({
		class: String,
		name: "evaluate",
		sealed: __ks_String,
		function: function() {
			__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].f[1]++;
			__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].s[4]++;
			const value = this.trim();
			__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].s[5]++;
			if((__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].b[2][0]++, __ks_String._im_startsWith(value, "function")) || (__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].b[2][1]++, __ks_String._im_startsWith(value, "{"))) {
				__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].b[1][0]++;
				__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].s[6]++;
				return eval("(function(){return " + value + ";})()");
			}
			else {
				__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].b[1][1]++;
				__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].s[7]++;
				return eval(value);
			}
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
		name: "startsWith",
		sealed: __ks_String,
		function: function(value) {
			if(arguments.length < 1) {
				throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
			}
			if(value === void 0 || value === null) {
				throw new TypeError("'value' is not nullable");
			}
			else if(!Type.isString(value)) {
				throw new TypeError("'value' is not of type 'String'");
			}
			__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].f[2]++;
			__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].s[8]++;
			return (__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].b[3][0]++, this.length >= value.length) && (__ks_coverage["/fixtures/compile/xample.evaluate.const.ks"].b[3][1]++, this.slice(0, value.length) === value);
		},
		signature: {
			access: 3,
			min: 1,
			max: 1,
			parameters: [
				{
					type: "String",
					min: 1,
					max: 1
				}
			]
		}
	});
}