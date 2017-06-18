var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/xample.array.uniq.ks"]) {
	__ks_coverage["/fixtures/compile/xample.array.uniq.ks"] = {"path":"/fixtures/compile/xample.array.uniq.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":20}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":14}},"3":{"start":{"line":5,"column":0},"end":{"line":57,"column":1}},"4":{"start":{"line":6,"column":38},"end":{"line":6,"column":68}},"5":{"start":{"line":8,"column":2},"end":{"line":8,"column":24}},"6":{"start":{"line":9,"column":2},"end":{"line":9,"column":11}},"7":{"start":{"line":11,"column":2},"end":{"line":53,"column":3}},"8":{"start":{"line":12,"column":3},"end":{"line":12,"column":18}},"9":{"start":{"line":14,"column":3},"end":{"line":31,"column":4}},"10":{"start":{"line":15,"column":4},"end":{"line":22,"column":5}},"11":{"start":{"line":16,"column":5},"end":{"line":16,"column":41}},"12":{"start":{"line":18,"column":5},"end":{"line":21,"column":6}},"13":{"start":{"line":19,"column":6},"end":{"line":19,"column":26}},"14":{"start":{"line":20,"column":6},"end":{"line":20,"column":18}},"15":{"start":{"line":25,"column":4},"end":{"line":30,"column":5}},"16":{"start":{"line":26,"column":5},"end":{"line":29,"column":6}},"17":{"start":{"line":27,"column":6},"end":{"line":27,"column":24}},"18":{"start":{"line":28,"column":6},"end":{"line":28,"column":18}},"19":{"start":{"line":34,"column":3},"end":{"line":52,"column":4}},"20":{"start":{"line":35,"column":4},"end":{"line":35,"column":24}},"21":{"start":{"line":37,"column":4},"end":{"line":44,"column":5}},"22":{"start":{"line":38,"column":5},"end":{"line":38,"column":41}},"23":{"start":{"line":40,"column":5},"end":{"line":43,"column":6}},"24":{"start":{"line":41,"column":6},"end":{"line":41,"column":26}},"25":{"start":{"line":42,"column":6},"end":{"line":42,"column":22}},"26":{"start":{"line":47,"column":4},"end":{"line":51,"column":5}},"27":{"start":{"line":48,"column":5},"end":{"line":50,"column":6}},"28":{"start":{"line":49,"column":6},"end":{"line":49,"column":24}},"29":{"start":{"line":55,"column":2},"end":{"line":55,"column":15}}},"branchMap":{"1":{"type":"if","line":11,"locations":[{"start":{"line":11,"column":2},"end":{"line":11,"column":2}},{"start":{"line":11,"column":2},"end":{"line":11,"column":2}}]},"2":{"type":"if","line":14,"locations":[{"start":{"line":14,"column":3},"end":{"line":14,"column":3}},{"start":{"line":14,"column":3},"end":{"line":14,"column":3}}]},"3":{"type":"if","line":18,"locations":[{"start":{"line":18,"column":5},"end":{"line":18,"column":5}},{"start":{"line":18,"column":5},"end":{"line":18,"column":5}}]},"4":{"type":"binary-expr","line":18,"locations":[{"start":{"line":18,"column":8},"end":{"line":18,"column":10}},{"start":{"line":18,"column":14},"end":{"line":18,"column":27}}]},"5":{"type":"if","line":26,"locations":[{"start":{"line":26,"column":5},"end":{"line":26,"column":5}},{"start":{"line":26,"column":5},"end":{"line":26,"column":5}}]},"6":{"type":"binary-expr","line":26,"locations":[{"start":{"line":26,"column":8},"end":{"line":26,"column":10}},{"start":{"line":26,"column":14},"end":{"line":26,"column":27}}]},"7":{"type":"if","line":34,"locations":[{"start":{"line":34,"column":3},"end":{"line":34,"column":3}},{"start":{"line":34,"column":3},"end":{"line":34,"column":3}}]},"8":{"type":"if","line":40,"locations":[{"start":{"line":40,"column":5},"end":{"line":40,"column":5}},{"start":{"line":40,"column":5},"end":{"line":40,"column":5}}]},"9":{"type":"binary-expr","line":40,"locations":[{"start":{"line":40,"column":8},"end":{"line":40,"column":10}},{"start":{"line":40,"column":14},"end":{"line":40,"column":35}}]},"10":{"type":"if","line":48,"locations":[{"start":{"line":48,"column":5},"end":{"line":48,"column":5}},{"start":{"line":48,"column":5},"end":{"line":48,"column":5}}]},"11":{"type":"binary-expr","line":48,"locations":[{"start":{"line":48,"column":8},"end":{"line":48,"column":10}},{"start":{"line":48,"column":14},"end":{"line":48,"column":37}}]}},"fnMap":{"1":{"name":"contains","line":6,"loc":{"start":{"line":6,"column":1},"end":{"line":6,"column":68}}},"2":{"name":"uniq","line":7,"loc":{"start":{"line":7,"column":1},"end":{"line":56,"column":2}}}}};
};
require("kaoscript/register");
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[1]++;
	var {Array, __ks_Array} = require("./_array.ks")();
	__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[2]++;
	__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[3]++;
	__ks_Array.__ks_func_contains_0 = function() {
		if(arguments.length < 1) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
		}
		let __ks_i = -1;
		let item = arguments[++__ks_i];
		if(item === void 0 || item === null) {
			throw new TypeError("'item' is not nullable");
		}
		let __ks__;
		let from = arguments.length > 1 && (__ks__ = arguments[++__ks_i]) !== void 0 && __ks__ !== null ? __ks__ : 0;
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[4]++;
		return this.indexOf(item, from) !== -1;
	};
	__ks_Array._im_contains = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length >= 1 && args.length <= 2) {
			return __ks_Array.__ks_func_contains_0.apply(that, args);
		}
		throw new SyntaxError("wrong number of arguments");
	};
	__ks_Array.__ks_func_uniq_0 = function() {
		if(arguments.length < 2) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 2)");
		}
		let __ks_i = -1;
		let __ks__;
		let sorted = arguments.length > 2 && (__ks__ = arguments[++__ks_i]) !== void 0 && __ks__ !== null ? __ks__ : false;
		let fn = arguments[++__ks_i];
		if(fn === void 0) {
			fn = null;
		}
		let bind = arguments[++__ks_i];
		if(bind === void 0) {
			bind = null;
		}
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].f[2]++;
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[5]++;
		let result = [];
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[6]++;
		let value;
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[7]++;
		if(sorted) {
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[1][0]++;
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[8]++;
			let seen = null;
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[9]++;
			if(Type.isValue(fn)) {
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[2][0]++;
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[10]++;
				for(let i = 0, __ks_0 = this.length; i < __ks_0; ++i) {
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[11]++;
					value = fn.call(bind, this[i], i, this);
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[12]++;
					if((__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[4][0]++, !i) || (__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[4][1]++, seen !== value)) {
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[3][0]++;
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[13]++;
						result.push(this[i]);
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[14]++;
						seen = value;
					}
				}
			}
			else {
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[2][1]++;
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[15]++;
				for(let i = 0, __ks_0 = this.length; i < __ks_0; ++i) {
					value = this[i];
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[16]++;
					if((__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[6][0]++, !i) || (__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[6][1]++, seen !== value)) {
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[5][0]++;
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[17]++;
						result.push(value);
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[18]++;
						seen = value;
					}
				}
			}
		}
		else {
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[1][1]++;
			__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[19]++;
			if(Type.isValue(fn)) {
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[7][0]++;
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[20]++;
				let seen = [];
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[21]++;
				for(let i = 0, __ks_0 = this.length; i < __ks_0; ++i) {
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[22]++;
					value = fn.call(bind, this[i], i, this);
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[23]++;
					if((__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[9][0]++, !i) || (__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[9][1]++, !__ks_Array._im_contains(seen, value))) {
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[8][0]++;
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[24]++;
						result.push(this[i]);
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[25]++;
						seen.push(value);
					}
				}
			}
			else {
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[7][1]++;
				__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[26]++;
				for(let i = 0, __ks_0 = this.length; i < __ks_0; ++i) {
					value = this[i];
					__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[27]++;
					if((__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[11][0]++, !i) || (__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[11][1]++, !__ks_Array._im_contains(result, value))) {
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].b[10][0]++;
						__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[28]++;
						result.push(value);
					}
				}
			}
		}
		__ks_coverage["/fixtures/compile/xample.array.uniq.ks"].s[29]++;
		return result;
	};
	__ks_Array._im_uniq = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length >= 2 && args.length <= 3) {
			return __ks_Array.__ks_func_uniq_0.apply(that, args);
		}
		throw new SyntaxError("wrong number of arguments");
	};
}