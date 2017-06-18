var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_object.ks"]) {
	__ks_coverage["/fixtures/compile/_object.ks"] = {"path":"/fixtures/compile/_object.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":20}},"2":{"start":{"line":3,"column":0},"end":{"line":4,"column":1}},"3":{"start":{"line":6,"column":0},"end":{"line":28,"column":1}},"4":{"start":{"line":9,"column":3},"end":{"line":9,"column":19}},"5":{"start":{"line":11,"column":3},"end":{"line":13,"column":4}},"6":{"start":{"line":12,"column":4},"end":{"line":12,"column":39}},"7":{"start":{"line":15,"column":3},"end":{"line":15,"column":17}},"8":{"start":{"line":19,"column":3},"end":{"line":19,"column":19}},"9":{"start":{"line":21,"column":3},"end":{"line":23,"column":4}},"10":{"start":{"line":22,"column":4},"end":{"line":22,"column":65}},"11":{"start":{"line":22,"column":4},"end":{"line":22,"column":39}},"12":{"start":{"line":25,"column":3},"end":{"line":25,"column":17}},"13":{"start":{"line":30,"column":0},"end":{"line":30,"column":13}}},"branchMap":{"1":{"type":"if","line":22,"locations":[{"start":{"line":22,"column":4},"end":{"line":22,"column":4}},{"start":{"line":22,"column":4},"end":{"line":22,"column":4}}]}},"fnMap":{"1":{"name":"map","line":8,"loc":{"start":{"line":8,"column":2},"end":{"line":16,"column":3}}},"2":{"name":"map","line":18,"loc":{"start":{"line":18,"column":2},"end":{"line":26,"column":3}}}}};
};
module.exports = function(Helper, Type) {
	__ks_coverage["/fixtures/compile/_object.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_object.ks"].s[2]++;
	var __ks_Object = {};
	__ks_coverage["/fixtures/compile/_object.ks"].s[3]++;
	__ks_Object.__ks_sttc_map_0 = function(object, iterator) {
		if(arguments.length < 2) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 2)");
		}
		if(object === void 0 || object === null) {
			throw new TypeError("'object' is not nullable");
		}
		else if(!Type.isObject(object)) {
			throw new TypeError("'object' is not of type 'Object'");
		}
		if(iterator === void 0 || iterator === null) {
			throw new TypeError("'iterator' is not nullable");
		}
		else if(!Type.isFunction(iterator)) {
			throw new TypeError("'iterator' is not of type 'Function'");
		}
		__ks_coverage["/fixtures/compile/_object.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/_object.ks"].s[4]++;
		let results = [];
		__ks_coverage["/fixtures/compile/_object.ks"].s[5]++;
		for(let item in object) {
			let index = object[item];
			__ks_coverage["/fixtures/compile/_object.ks"].s[6]++;
			results.push(iterator(item, index));
		}
		__ks_coverage["/fixtures/compile/_object.ks"].s[7]++;
		return results;
	};
	__ks_Object._cm_map = function() {
		var args = Array.prototype.slice.call(arguments);
		if(args.length === 2) {
			return __ks_Object.__ks_sttc_map_0.apply(null, args);
		}
		else if(args.length === 3) {
			return __ks_Object.__ks_sttc_map_1.apply(null, args);
		}
		throw new SyntaxError("wrong number of arguments");
	};
	__ks_Object.__ks_sttc_map_1 = function(object, iterator, condition) {
		if(arguments.length < 3) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 3)");
		}
		if(object === void 0 || object === null) {
			throw new TypeError("'object' is not nullable");
		}
		else if(!Type.isObject(object)) {
			throw new TypeError("'object' is not of type 'Object'");
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
		__ks_coverage["/fixtures/compile/_object.ks"].f[2]++;
		__ks_coverage["/fixtures/compile/_object.ks"].s[8]++;
		let results = [];
		__ks_coverage["/fixtures/compile/_object.ks"].s[9]++;
		for(let item in object) {
			let index = object[item];
			__ks_coverage["/fixtures/compile/_object.ks"].s[10]++;
			if(condition(item, index)) {
				__ks_coverage["/fixtures/compile/_object.ks"].b[1][0]++;
				__ks_coverage["/fixtures/compile/_object.ks"].s[11]++;
				results.push(iterator(item, index));
			}
		}
		__ks_coverage["/fixtures/compile/_object.ks"].s[12]++;
		return results;
	};
	__ks_Object._cm_map = function() {
		var args = Array.prototype.slice.call(arguments);
		if(args.length === 2) {
			return __ks_Object.__ks_sttc_map_0.apply(null, args);
		}
		else if(args.length === 3) {
			return __ks_Object.__ks_sttc_map_1.apply(null, args);
		}
		throw new SyntaxError("wrong number of arguments");
	};
	__ks_coverage["/fixtures/compile/_object.ks"].s[13]++;
	return {
		Object: Object,
		__ks_Object: __ks_Object
	};
}