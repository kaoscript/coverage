var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/include.default.ks"]) {
	__ks_coverage["/fixtures/compile/include.default.ks"] = {"path":"/fixtures/compile/include.default.ks","s":{"1":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":22}}},"branchMap":{},"fnMap":{}};
};
if(!__ks_coverage["/fixtures/compile/_string.ks"]) {
	__ks_coverage["/fixtures/compile/_string.ks"] = {"path":"/fixtures/compile/_string.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":27}},"2":{"start":{"line":3,"column":0},"end":{"line":5,"column":1}},"3":{"start":{"line":7,"column":0},"end":{"line":22,"column":1}},"4":{"start":{"line":9,"column":2},"end":{"line":17,"column":3}},"5":{"start":{"line":10,"column":3},"end":{"line":10,"column":12}},"6":{"start":{"line":12,"column":7},"end":{"line":17,"column":3}},"7":{"start":{"line":13,"column":3},"end":{"line":13,"column":70}},"8":{"start":{"line":16,"column":3},"end":{"line":16,"column":39}},"9":{"start":{"line":19,"column":20},"end":{"line":19,"column":38}},"10":{"start":{"line":20,"column":22},"end":{"line":20,"column":38}},"11":{"start":{"line":21,"column":29},"end":{"line":21,"column":49}},"12":{"start":{"line":24,"column":0},"end":{"line":24,"column":13}}},"branchMap":{"1":{"type":"if","line":9,"locations":[{"start":{"line":9,"column":2},"end":{"line":9,"column":2}},{"start":{"line":9,"column":2},"end":{"line":9,"column":2}}]},"2":{"type":"if","line":12,"locations":[{"start":{"line":12,"column":7},"end":{"line":12,"column":7}},{"start":{"line":12,"column":7},"end":{"line":12,"column":7}}]}},"fnMap":{"1":{"name":"lines","line":8,"loc":{"start":{"line":8,"column":1},"end":{"line":18,"column":2}}},"2":{"name":"lower","line":19,"loc":{"start":{"line":19,"column":1},"end":{"line":19,"column":38}}},"3":{"name":"toFloat","line":20,"loc":{"start":{"line":20,"column":1},"end":{"line":20,"column":38}}},"4":{"name":"toInt","line":21,"loc":{"start":{"line":21,"column":1},"end":{"line":21,"column":49}}}}};
};
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/include.default.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_string.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_string.ks"].s[2]++;
	var __ks_String = {};
	__ks_coverage["/fixtures/compile/_string.ks"].s[3]++;
	__ks_String.__ks_func_lines_0 = function(emptyLines) {
		if(emptyLines === void 0 || emptyLines === null) {
			emptyLines = false;
		}
		__ks_coverage["/fixtures/compile/_string.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/_string.ks"].s[4]++;
		if(this.length === 0) {
			__ks_coverage["/fixtures/compile/_string.ks"].b[1][0]++;
			__ks_coverage["/fixtures/compile/_string.ks"].s[5]++;
			return [];
		}
		else {
			__ks_coverage["/fixtures/compile/_string.ks"].b[1][1]++;
			__ks_coverage["/fixtures/compile/_string.ks"].s[6]++;
			if(emptyLines) {
				__ks_coverage["/fixtures/compile/_string.ks"].b[2][0]++;
				__ks_coverage["/fixtures/compile/_string.ks"].s[7]++;
				return this.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
			}
			else {
				__ks_coverage["/fixtures/compile/_string.ks"].b[2][1]++;
				__ks_coverage["/fixtures/compile/_string.ks"].s[8]++;
				let __ks_0;
				return Type.isValue(__ks_0 = this.match(/[^\r\n]+/g)) ? __ks_0 : [];
			}
		}
	};
	__ks_String.__ks_func_lower_0 = function() {
		__ks_coverage["/fixtures/compile/_string.ks"].f[2]++;
		__ks_coverage["/fixtures/compile/_string.ks"].s[9]++;
		return this.toLowerCase();
	};
	__ks_String.__ks_func_toFloat_0 = function() {
		__ks_coverage["/fixtures/compile/_string.ks"].f[3]++;
		__ks_coverage["/fixtures/compile/_string.ks"].s[10]++;
		return parseFloat(this);
	};
	__ks_String.__ks_func_toInt_0 = function(base) {
		if(base === void 0 || base === null) {
			base = 10;
		}
		__ks_coverage["/fixtures/compile/_string.ks"].f[4]++;
		__ks_coverage["/fixtures/compile/_string.ks"].s[11]++;
		return parseInt(this, base);
	};
	__ks_String._im_lines = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length >= 0 && args.length <= 1) {
			return __ks_String.__ks_func_lines_0.apply(that, args);
		}
		throw new SyntaxError("wrong number of arguments");
	};
	__ks_String._im_lower = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length === 0) {
			return __ks_String.__ks_func_lower_0.apply(that);
		}
		throw new SyntaxError("wrong number of arguments");
	};
	__ks_String._im_toFloat = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length === 0) {
			return __ks_String.__ks_func_toFloat_0.apply(that);
		}
		throw new SyntaxError("wrong number of arguments");
	};
	__ks_String._im_toInt = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length >= 0 && args.length <= 1) {
			return __ks_String.__ks_func_toInt_0.apply(that, args);
		}
		throw new SyntaxError("wrong number of arguments");
	};
	__ks_coverage["/fixtures/compile/_string.ks"].s[12]++;
	return {
		String: String,
		__ks_String: __ks_String
	};
};