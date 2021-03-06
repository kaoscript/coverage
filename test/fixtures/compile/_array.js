var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_array.ks"]) {
	__ks_coverage["/fixtures/compile/_array.ks"] = {"path":"/fixtures/compile/_array.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":2,"column":1}},"2":{"start":{"line":4,"column":0},"end":{"line":30,"column":1}},"3":{"start":{"line":7,"column":3},"end":{"line":7,"column":19}},"4":{"start":{"line":9,"column":3},"end":{"line":11,"column":4}},"5":{"start":{"line":10,"column":4},"end":{"line":10,"column":39}},"6":{"start":{"line":13,"column":3},"end":{"line":13,"column":17}},"7":{"start":{"line":17,"column":3},"end":{"line":17,"column":19}},"8":{"start":{"line":19,"column":3},"end":{"line":21,"column":4}},"9":{"start":{"line":20,"column":4},"end":{"line":20,"column":65}},"10":{"start":{"line":20,"column":4},"end":{"line":20,"column":39}},"11":{"start":{"line":23,"column":3},"end":{"line":23,"column":17}},"12":{"start":{"line":28,"column":2},"end":{"line":28,"column":55}},"13":{"start":{"line":32,"column":0},"end":{"line":32,"column":12}}},"branchMap":{"1":{"type":"if","line":20,"locations":[{"start":{"line":20,"column":4},"end":{"line":20,"column":4}},{"start":{"line":20,"column":4},"end":{"line":20,"column":4}}]},"2":{"type":"cond-expr","line":28,"locations":[{"start":{"line":28,"column":23},"end":{"line":28,"column":48}},{"start":{"line":28,"column":51},"end":{"line":28,"column":55}}]}},"fnMap":{"1":{"name":"map","line":5,"loc":{"start":{"line":5,"column":1},"end":{"line":14,"column":3}}},"2":{"name":"map","line":5,"loc":{"start":{"line":5,"column":1},"end":{"line":24,"column":3}}},"3":{"name":"last","line":27,"loc":{"start":{"line":27,"column":1},"end":{"line":29,"column":2}}}}};
};
var {Operator, Type} = require("@kaoscript/runtime");
module.exports = function() {
	__ks_coverage["/fixtures/compile/_array.ks"].s[1]++;
	var __ks_Array = {};
	__ks_coverage["/fixtures/compile/_array.ks"].s[2]++;
	__ks_Array.__ks_sttc_map_0 = function(array, iterator) {
		if(arguments.length < 2) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 2)");
		}
		if(array === void 0 || array === null) {
			throw new TypeError("'array' is not nullable");
		}
		else if(!Type.isArray(array)) {
			throw new TypeError("'array' is not of type 'Array'");
		}
		if(iterator === void 0 || iterator === null) {
			throw new TypeError("'iterator' is not nullable");
		}
		else if(!Type.isFunction(iterator)) {
			throw new TypeError("'iterator' is not of type 'Function'");
		}
		__ks_coverage["/fixtures/compile/_array.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/_array.ks"].s[3]++;
		let results = [];
		__ks_coverage["/fixtures/compile/_array.ks"].s[4]++;
		for(let index = 0, __ks_0 = array.length, item; index < __ks_0; ++index) {
			item = array[index];
			__ks_coverage["/fixtures/compile/_array.ks"].s[5]++;
			results.push(iterator(item, index));
		}
		__ks_coverage["/fixtures/compile/_array.ks"].s[6]++;
		return results;
	};
	__ks_Array.__ks_sttc_map_1 = function(array, iterator, condition) {
		if(arguments.length < 3) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 3)");
		}
		if(array === void 0 || array === null) {
			throw new TypeError("'array' is not nullable");
		}
		else if(!Type.isArray(array)) {
			throw new TypeError("'array' is not of type 'Array'");
		}
		if(iterator === void 0 || iterator === null) {
			throw new TypeError("'iterator' is not nullable");
		}
		else if(!Type.isFunction(iterator)) {
			throw new TypeError("'iterator' is not of type 'Function'");
		}
		if(condition === void 0 || condition === null) {
			throw new TypeError("'condition' is not nullable");
		}
		else if(!Type.isFunction(condition)) {
			throw new TypeError("'condition' is not of type 'Function'");
		}
		__ks_coverage["/fixtures/compile/_array.ks"].f[2]++;
		__ks_coverage["/fixtures/compile/_array.ks"].s[7]++;
		let results = [];
		__ks_coverage["/fixtures/compile/_array.ks"].s[8]++;
		for(let index = 0, __ks_0 = array.length, item; index < __ks_0; ++index) {
			item = array[index];
			__ks_coverage["/fixtures/compile/_array.ks"].s[9]++;
			if(condition(item, index) === true) {
				__ks_coverage["/fixtures/compile/_array.ks"].b[1][0]++;
				__ks_coverage["/fixtures/compile/_array.ks"].s[10]++;
				results.push(iterator(item, index));
			}
		}
		__ks_coverage["/fixtures/compile/_array.ks"].s[11]++;
		return results;
	};
	__ks_Array.__ks_func_last_0 = function(index) {
		if(index === void 0 || index === null) {
			index = 1;
		}
		__ks_coverage["/fixtures/compile/_array.ks"].f[3]++;
		__ks_coverage["/fixtures/compile/_array.ks"].s[12]++;
		return (this.length === true) ? (__ks_coverage["/fixtures/compile/_array.ks"].b[2][0]++, this[Operator.subtraction(this.length, index)]) : (__ks_coverage["/fixtures/compile/_array.ks"].b[2][1]++, null);
	};
	__ks_Array._cm_map = function() {
		var args = Array.prototype.slice.call(arguments);
		if(args.length === 2) {
			return __ks_Array.__ks_sttc_map_0.apply(null, args);
		}
		else if(args.length === 3) {
			return __ks_Array.__ks_sttc_map_1.apply(null, args);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_Array._im_last = function(that) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		if(args.length >= 0 && args.length <= 1) {
			return __ks_Array.__ks_func_last_0.apply(that, args);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_coverage["/fixtures/compile/_array.ks"].s[13]++;
	return {
		Array: Array,
		__ks_Array: __ks_Array
	};
};