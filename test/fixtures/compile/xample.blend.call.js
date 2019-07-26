var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/xample.blend.call.ks"]) {
	__ks_coverage["/fixtures/compile/xample.blend.call.ks"] = {"path":"/fixtures/compile/xample.blend.call.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":21}},"2":{"start":{"line":3,"column":0},"end":{"line":7,"column":1}},"3":{"start":{"line":9,"column":0},"end":{"line":9,"column":19}},"4":{"start":{"line":11,"column":0},"end":{"line":13,"column":1}},"5":{"start":{"line":12,"column":1},"end":{"line":12,"column":45}},"6":{"start":{"line":15,"column":0},"end":{"line":15,"column":42}}},"branchMap":{},"fnMap":{"1":{"name":"blend","line":11,"loc":{"start":{"line":11,"column":0},"end":{"line":13,"column":1}}}}};
};
require("kaoscript/register");
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/xample.blend.call.ks"].s[1]++;
	var {Number, __ks_Number} = require("./_number.ks")();
	__ks_coverage["/fixtures/compile/xample.blend.call.ks"].s[2]++;
	__ks_coverage["/fixtures/compile/xample.blend.call.ks"].s[3]++;
	__ks_coverage["/fixtures/compile/xample.blend.call.ks"].s[4]++;
	function blend(x, y, percentage) {
		if(arguments.length < 3) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 3)");
		}
		if(x === void 0 || x === null) {
			throw new TypeError("'x' is not nullable");
		}
		else if(!Type.isNumber(x)) {
			throw new TypeError("'x' is not of type 'float'");
		}
		if(y === void 0 || y === null) {
			throw new TypeError("'y' is not nullable");
		}
		else if(!Type.isNumber(y)) {
			throw new TypeError("'y' is not of type 'float'");
		}
		if(percentage === void 0 || percentage === null) {
			throw new TypeError("'percentage' is not nullable");
		}
		else if(!Type.isNumber(percentage)) {
			throw new TypeError("'percentage' is not of type 'float'");
		}
		__ks_coverage["/fixtures/compile/xample.blend.call.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/xample.blend.call.ks"].s[5]++;
		return ((1 - percentage) * x) + (percentage * y);
	}
	__ks_coverage["/fixtures/compile/xample.blend.call.ks"].s[6]++;
	console.log(__ks_Number._im_round(blend(0.8, 0.5, 0.3), 2));
};