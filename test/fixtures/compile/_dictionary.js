var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_dictionary.ks"]) {
	__ks_coverage["/fixtures/compile/_dictionary.ks"] = {"path":"/fixtures/compile/_dictionary.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":2,"column":1}},"2":{"start":{"line":4,"column":0},"end":{"line":26,"column":1}},"3":{"start":{"line":7,"column":3},"end":{"line":7,"column":19}},"4":{"start":{"line":9,"column":3},"end":{"line":11,"column":4}},"5":{"start":{"line":10,"column":4},"end":{"line":10,"column":39}},"6":{"start":{"line":13,"column":3},"end":{"line":13,"column":17}},"7":{"start":{"line":17,"column":3},"end":{"line":17,"column":19}},"8":{"start":{"line":19,"column":3},"end":{"line":21,"column":4}},"9":{"start":{"line":20,"column":4},"end":{"line":20,"column":39}},"10":{"start":{"line":23,"column":3},"end":{"line":23,"column":17}},"11":{"start":{"line":28,"column":0},"end":{"line":28,"column":17}}},"branchMap":{"1":{"type":"if","line":19,"locations":[{"start":{"line":19,"column":27},"end":{"line":19,"column":27}},{"start":{"line":19,"column":27},"end":{"line":19,"column":27}}]}},"fnMap":{"1":{"name":"map","line":5,"loc":{"start":{"line":5,"column":1},"end":{"line":14,"column":3}}},"2":{"name":"map","line":5,"loc":{"start":{"line":5,"column":1},"end":{"line":24,"column":3}}}}};
};
var {Dictionary, Type} = require("@kaoscript/runtime");
module.exports = function() {
	__ks_coverage["/fixtures/compile/_dictionary.ks"].s[1]++;
	var __ks_Dictionary = {};
	__ks_coverage["/fixtures/compile/_dictionary.ks"].s[2]++;
	__ks_Dictionary.__ks_sttc_map_0 = function(dict, iterator) {
		if(arguments.length < 2) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 2)");
		}
		if(dict === void 0 || dict === null) {
			throw new TypeError("'dict' is not nullable");
		}
		else if(!Type.isDictionary(dict)) {
			throw new TypeError("'dict' is not of type 'Dictionary'");
		}
		if(iterator === void 0 || iterator === null) {
			throw new TypeError("'iterator' is not nullable");
		}
		else if(!Type.isFunction(iterator)) {
			throw new TypeError("'iterator' is not of type 'Function'");
		}
		__ks_coverage["/fixtures/compile/_dictionary.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/_dictionary.ks"].s[3]++;
		let results = [];
		__ks_coverage["/fixtures/compile/_dictionary.ks"].s[4]++;
		for(let index in dict) {
			let item = dict[index];
			__ks_coverage["/fixtures/compile/_dictionary.ks"].s[5]++;
			results.push(iterator(item, index));
		}
		__ks_coverage["/fixtures/compile/_dictionary.ks"].s[6]++;
		return results;
	};
	__ks_Dictionary.__ks_sttc_map_1 = function(dict, iterator, condition) {
		if(arguments.length < 3) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 3)");
		}
		if(dict === void 0 || dict === null) {
			throw new TypeError("'dict' is not nullable");
		}
		else if(!Type.isDictionary(dict)) {
			throw new TypeError("'dict' is not of type 'Dictionary'");
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
		__ks_coverage["/fixtures/compile/_dictionary.ks"].f[2]++;
		__ks_coverage["/fixtures/compile/_dictionary.ks"].s[7]++;
		let results = [];
		__ks_coverage["/fixtures/compile/_dictionary.ks"].s[8]++;
		for(let index in dict) {
			let item = dict[index];
			if(condition(item, index) === true) {
				__ks_coverage["/fixtures/compile/_dictionary.ks"].b[1][0]++;
				__ks_coverage["/fixtures/compile/_dictionary.ks"].s[9]++;
				results.push(iterator(item, index));
			}
		}
		__ks_coverage["/fixtures/compile/_dictionary.ks"].s[10]++;
		return results;
	};
	__ks_Dictionary._cm_map = function() {
		var args = Array.prototype.slice.call(arguments);
		if(args.length === 2) {
			return __ks_Dictionary.__ks_sttc_map_0.apply(null, args);
		}
		else if(args.length === 3) {
			return __ks_Dictionary.__ks_sttc_map_1.apply(null, args);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	__ks_coverage["/fixtures/compile/_dictionary.ks"].s[11]++;
	return {
		Dictionary: Dictionary,
		__ks_Dictionary: __ks_Dictionary
	};
};