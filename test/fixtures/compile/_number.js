var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_number.ks"]) {
	__ks_coverage["/fixtures/compile/_number.ks"] = {"path":"/fixtures/compile/_number.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":34}},"2":{"start":{"line":3,"column":0},"end":{"line":6,"column":1}},"3":{"start":{"line":8,"column":0},"end":{"line":13,"column":1}},"4":{"start":{"line":15,"column":0},"end":{"line":39,"column":1}},"5":{"start":{"line":17,"column":2},"end":{"line":17,"column":63}},"6":{"start":{"line":20,"column":2},"end":{"line":31,"column":3}},"7":{"start":{"line":21,"column":3},"end":{"line":21,"column":11}},"8":{"start":{"line":24,"column":3},"end":{"line":24,"column":21}},"9":{"start":{"line":25,"column":3},"end":{"line":30,"column":4}},"10":{"start":{"line":26,"column":4},"end":{"line":26,"column":18}},"11":{"start":{"line":29,"column":4},"end":{"line":29,"column":12}},"12":{"start":{"line":34,"column":2},"end":{"line":34,"column":48}},"13":{"start":{"line":35,"column":2},"end":{"line":35,"column":49}},"14":{"start":{"line":37,"column":22},"end":{"line":37,"column":38}},"15":{"start":{"line":38,"column":37},"end":{"line":38,"column":57}},"16":{"start":{"line":41,"column":0},"end":{"line":41,"column":13}}},"branchMap":{"1":{"type":"cond-expr","line":17,"locations":[{"start":{"line":17,"column":23},"end":{"line":17,"column":26}},{"start":{"line":17,"column":29},"end":{"line":17,"column":63}}]},"2":{"type":"if","line":20,"locations":[{"start":{"line":20,"column":2},"end":{"line":20,"column":2}},{"start":{"line":20,"column":2},"end":{"line":20,"column":2}}]},"3":{"type":"if","line":25,"locations":[{"start":{"line":25,"column":3},"end":{"line":25,"column":3}},{"start":{"line":25,"column":3},"end":{"line":25,"column":3}}]}},"fnMap":{"1":{"name":"limit","line":16,"loc":{"start":{"line":16,"column":1},"end":{"line":18,"column":2}}},"2":{"name":"mod","line":19,"loc":{"start":{"line":19,"column":1},"end":{"line":32,"column":2}}},"3":{"name":"round","line":33,"loc":{"start":{"line":33,"column":1},"end":{"line":36,"column":2}}},"4":{"name":"toFloat","line":37,"loc":{"start":{"line":37,"column":1},"end":{"line":37,"column":38}}},"5":{"name":"toInt","line":38,"loc":{"start":{"line":38,"column":1},"end":{"line":38,"column":57}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/_number.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_number.ks"].s[2]++;
	var __ks_Number = {};
	__ks_coverage["/fixtures/compile/_number.ks"].s[3]++;
	var __ks_Math = {};
	__ks_coverage["/fixtures/compile/_number.ks"].s[4]++;
	__ks_Number.__ks_func_limit_0 = function(min, max) {
		if(arguments.length < 2) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 2)");
		}
		if(min === void 0 || min === null) {
			throw new TypeError("'min' is not nullable");
		}
		else if(!Type.isNumber(min)) {
			throw new TypeError("'min' is not of type 'Number'");
		}
		if(max === void 0 || max === null) {
			throw new TypeError("'max' is not nullable");
		}
		else if(!Type.isNumber(max)) {
			throw new TypeError("'max' is not of type 'Number'");
		}
		__ks_coverage["/fixtures/compile/_number.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/_number.ks"].s[5]++;
		return (isNaN(this) === true) ? (__ks_coverage["/fixtures/compile/_number.ks"].b[1][0]++, min) : (__ks_coverage["/fixtures/compile/_number.ks"].b[1][1]++, Math.min(max, Math.max(min, this)));
	};
	__ks_Number.__ks_func_mod_0 = function(max) {
		if(arguments.length < 1) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
		}
		if(max === void 0 || max === null) {
			throw new TypeError("'max' is not nullable");
		}
		else if(!Type.isNumber(max)) {
			throw new TypeError("'max' is not of type 'Number'");
		}
		__ks_coverage["/fixtures/compile/_number.ks"].f[2]++;
		__ks_coverage["/fixtures/compile/_number.ks"].s[6]++;
		if(isNaN(this) === true) {
			__ks_coverage["/fixtures/compile/_number.ks"].b[2][0]++;
			__ks_coverage["/fixtures/compile/_number.ks"].s[7]++;
			return 0;
		}
		else {
			__ks_coverage["/fixtures/compile/_number.ks"].b[2][1]++;
			__ks_coverage["/fixtures/compile/_number.ks"].s[8]++;
			let n = this % max;
			__ks_coverage["/fixtures/compile/_number.ks"].s[9]++;
			if(n < 0) {
				__ks_coverage["/fixtures/compile/_number.ks"].b[3][0]++;
				__ks_coverage["/fixtures/compile/_number.ks"].s[10]++;
				return n + max;
			}
			else {
				__ks_coverage["/fixtures/compile/_number.ks"].b[3][1]++;
				__ks_coverage["/fixtures/compile/_number.ks"].s[11]++;
				return n;
			}
		}
	};
	__ks_Number.__ks_func_round_0 = function(precision) {
		if(precision === void 0 || precision === null) {
			precision = 0;
		}
		else if(!Type.isNumber(precision)) {
			throw new TypeError("'precision' is not of type 'Number'");
		}
		__ks_coverage["/fixtures/compile/_number.ks"].f[3]++;
		__ks_coverage["/fixtures/compile/_number.ks"].s[12]++;
		precision = Math.pow(10, precision).toFixed(0);
		__ks_coverage["/fixtures/compile/_number.ks"].s[13]++;
		return Math.round(this * precision) / precision;
	};
	__ks_Number.__ks_func_toFloat_0 = function() {
		__ks_coverage["/fixtures/compile/_number.ks"].f[4]++;
		__ks_coverage["/fixtures/compile/_number.ks"].s[14]++;
		return parseFloat(this);
	};
	__ks_Number.__ks_func_toInt_0 = function(base) {
		if(base === void 0 || base === null) {
			base = 10;
		}
		else if(!Type.isNumber(base)) {
			throw new TypeError("'base' is not of type 'Number'");
		}
		__ks_coverage["/fixtures/compile/_number.ks"].f[5]++;
		__ks_coverage["/fixtures/compile/_number.ks"].s[15]++;
		return parseInt(this, base);
	};
	__ks_Number._im_limit = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length === 2) {
			return __ks_Number.__ks_func_limit_0.apply(that, args);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_Number._im_mod = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length === 1) {
			return __ks_Number.__ks_func_mod_0.apply(that, args);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_Number._im_round = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length >= 0 && args.length <= 1) {
			return __ks_Number.__ks_func_round_0.apply(that, args);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_Number._im_toFloat = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length === 0) {
			return __ks_Number.__ks_func_toFloat_0.apply(that);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_Number._im_toInt = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length >= 0 && args.length <= 1) {
			return __ks_Number.__ks_func_toInt_0.apply(that, args);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_coverage["/fixtures/compile/_number.ks"].s[16]++;
	return {
		Number: Number,
		__ks_Number: __ks_Number
	};
};