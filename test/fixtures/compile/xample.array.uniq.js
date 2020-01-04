var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/xample.array.uniq.ks"]) {
	__ks_coverage["/fixtures/compile/xample.array.uniq.ks"] = {"path":"/fixtures/compile/xample.array.uniq.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":20}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":14}},"3":{"start":{"line":5,"column":0},"end":{"line":56,"column":1}},"4":{"start":{"line":6,"column":38},"end":{"line":6,"column":68}},"5":{"start":{"line":8,"column":2},"end":{"line":8,"column":19}},"6":{"start":{"line":10,"column":2},"end":{"line":52,"column":3}},"7":{"start":{"line":11,"column":3},"end":{"line":11,"column":18}},"8":{"start":{"line":13,"column":3},"end":{"line":30,"column":4}},"9":{"start":{"line":14,"column":4},"end":{"line":21,"column":5}},"10":{"start":{"line":15,"column":5},"end":{"line":15,"column":47}},"11":{"start":{"line":17,"column":5},"end":{"line":20,"column":6}},"12":{"start":{"line":18,"column":6},"end":{"line":18,"column":26}},"13":{"start":{"line":19,"column":6},"end":{"line":19,"column":18}},"14":{"start":{"line":24,"column":4},"end":{"line":29,"column":5}},"15":{"start":{"line":25,"column":5},"end":{"line":28,"column":6}},"16":{"start":{"line":26,"column":6},"end":{"line":26,"column":24}},"17":{"start":{"line":27,"column":6},"end":{"line":27,"column":18}},"18":{"start":{"line":33,"column":3},"end":{"line":51,"column":4}},"19":{"start":{"line":34,"column":4},"end":{"line":34,"column":19}},"20":{"start":{"line":36,"column":4},"end":{"line":43,"column":5}},"21":{"start":{"line":37,"column":5},"end":{"line":37,"column":47}},"22":{"start":{"line":39,"column":5},"end":{"line":42,"column":6}},"23":{"start":{"line":40,"column":6},"end":{"line":40,"column":26}},"24":{"start":{"line":41,"column":6},"end":{"line":41,"column":22}},"25":{"start":{"line":46,"column":4},"end":{"line":50,"column":5}},"26":{"start":{"line":47,"column":5},"end":{"line":49,"column":6}},"27":{"start":{"line":48,"column":6},"end":{"line":48,"column":24}},"28":{"start":{"line":54,"column":2},"end":{"line":54,"column":15}}},"branchMap":{"1":{"type":"if","line":10,"locations":[{"start":{"line":10,"column":2},"end":{"line":10,"column":2}},{"start":{"line":10,"column":2},"end":{"line":10,"column":2}}]},"2":{"type":"if","line":13,"locations":[{"start":{"line":13,"column":3},"end":{"line":13,"column":3}},{"start":{"line":13,"column":3},"end":{"line":13,"column":3}}]},"3":{"type":"if","line":17,"locations":[{"start":{"line":17,"column":5},"end":{"line":17,"column":5}},{"start":{"line":17,"column":5},"end":{"line":17,"column":5}}]},"4":{"type":"binary-expr","line":17,"locations":[{"start":{"line":17,"column":8},"end":{"line":17,"column":14}},{"start":{"line":17,"column":18},"end":{"line":17,"column":31}}]},"5":{"type":"if","line":25,"locations":[{"start":{"line":25,"column":5},"end":{"line":25,"column":5}},{"start":{"line":25,"column":5},"end":{"line":25,"column":5}}]},"6":{"type":"binary-expr","line":25,"locations":[{"start":{"line":25,"column":8},"end":{"line":25,"column":14}},{"start":{"line":25,"column":18},"end":{"line":25,"column":31}}]},"7":{"type":"if","line":33,"locations":[{"start":{"line":33,"column":3},"end":{"line":33,"column":3}},{"start":{"line":33,"column":3},"end":{"line":33,"column":3}}]},"8":{"type":"if","line":39,"locations":[{"start":{"line":39,"column":5},"end":{"line":39,"column":5}},{"start":{"line":39,"column":5},"end":{"line":39,"column":5}}]},"9":{"type":"binary-expr","line":39,"locations":[{"start":{"line":39,"column":8},"end":{"line":39,"column":14}},{"start":{"line":39,"column":18},"end":{"line":39,"column":39}}]},"10":{"type":"if","line":47,"locations":[{"start":{"line":47,"column":5},"end":{"line":47,"column":5}},{"start":{"line":47,"column":5},"end":{"line":47,"column":5}}]},"11":{"type":"binary-expr","line":47,"locations":[{"start":{"line":47,"column":8},"end":{"line":47,"column":14}},{"start":{"line":47,"column":18},"end":{"line":47,"column":41}}]}},"fnMap":{"1":{"name":"contains","line":6,"loc":{"start":{"line":6,"column":1},"end":{"line":6,"column":68}}},"2":{"name":"uniq","line":7,"loc":{"start":{"line":7,"column":1},"end":{"line":55,"column":2}}}}};
};
require("kaoscript/register");
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[1]++;
	var {Array, __ks_Array} = require("./_array.ks")();
	__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[2]++;
	__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[3]++;
	__ks_Array.__ks_func_contains_0 = function(item, from) {
		if(arguments.length < 1) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
		}
		if(item === void 0 || item === null) {
			throw new TypeError("'item' is not nullable");
		}
		if(from === void 0 || from === null) {
			from = 0;
		}
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[4]++;
		return this.indexOf(item, from) !== -1;
	};
	__ks_Array.__ks_func_uniq_0 = function() {
		let __ks_i = -1;
		let sorted;
		if(arguments.length > ++__ks_i && (sorted = arguments[__ks_i]) !== void 0 && sorted !== null) {
			if(!Type.isBoolean(sorted)) {
				if(arguments.length - __ks_i < 3) {
					sorted = false;
					--__ks_i;
				}
				else {
					throw new TypeError("'sorted' is not of type 'Boolean'");
				}
			}
		}
		else {
			sorted = false;
		}
		let fn;
		if(arguments.length > ++__ks_i && (fn = arguments[__ks_i]) !== void 0) {
			if(fn !== null && !Type.isFunction(fn)) {
				if(arguments.length - __ks_i < 2) {
					fn = null;
					--__ks_i;
				}
				else {
					throw new TypeError("'fn' is not of type 'Function?'");
				}
			}
		}
		else {
			fn = null;
		}
		let __ks__;
		let bind = arguments.length > 2 && (__ks__ = arguments[++__ks_i]) !== void 0 ? __ks__ : null;
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].f[2]++;
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[5]++;
		const result = [];
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[6]++;
		if(sorted) {
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[1][0]++;
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[7]++;
			let seen = null;
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[8]++;
			if(fn !== null) {
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[2][0]++;
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[9]++;
				for(let i = 0, __ks_0 = this.length; i < __ks_0; ++i) {
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[10]++;
					const value = fn.call(bind, this[i], i, this);
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[11]++;
					if((__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[4][0]++, i === 0) || (__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[4][1]++, seen !== value)) {
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[3][0]++;
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[12]++;
						result.push(this[i]);
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[13]++;
						seen = value;
					}
				}
			}
			else {
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[2][1]++;
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[14]++;
				for(let i = 0, __ks_0 = this.length, value; i < __ks_0; ++i) {
					value = this[i];
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[15]++;
					if((__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[6][0]++, i === 0) || (__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[6][1]++, seen !== value)) {
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[5][0]++;
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[16]++;
						result.push(value);
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[17]++;
						seen = value;
					}
				}
			}
		}
		else {
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[1][1]++;
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[18]++;
			if(fn !== null) {
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[7][0]++;
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[19]++;
				const seen = [];
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[20]++;
				for(let i = 0, __ks_0 = this.length; i < __ks_0; ++i) {
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[21]++;
					const value = fn.call(bind, this[i], i, this);
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[22]++;
					if((__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[9][0]++, i === 0) || (__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[9][1]++, !__ks_Array._im_contains(seen, value))) {
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[8][0]++;
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[23]++;
						result.push(this[i]);
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[24]++;
						seen.push(value);
					}
				}
			}
			else {
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[7][1]++;
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[25]++;
				for(let i = 0, __ks_0 = this.length, value; i < __ks_0; ++i) {
					value = this[i];
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[26]++;
					if((__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[11][0]++, i === 0) || (__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[11][1]++, !__ks_Array._im_contains(result, value))) {
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[10][0]++;
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[27]++;
						result.push(value);
					}
				}
			}
		}
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[28]++;
		return result;
	};
	__ks_Array._im_contains = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length >= 1 && args.length <= 2) {
			return __ks_Array.__ks_func_contains_0.apply(that, args);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_Array._im_uniq = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length >= 0 && args.length <= 3) {
			return __ks_Array.__ks_func_uniq_0.apply(that, args);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
};