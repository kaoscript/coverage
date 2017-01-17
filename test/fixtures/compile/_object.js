var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":20}},"2":{"start":{"line":3,"column":0},"end":{"line":4,"column":1}},"3":{"start":{"line":6,"column":0},"end":{"line":28,"column":1}},"4":{"start":{"line":9,"column":3},"end":{"line":9,"column":19}},"5":{"start":{"line":11,"column":3},"end":{"line":13,"column":4}},"6":{"start":{"line":12,"column":4},"end":{"line":12,"column":39}},"7":{"start":{"line":15,"column":3},"end":{"line":15,"column":17}},"8":{"start":{"line":19,"column":3},"end":{"line":19,"column":19}},"9":{"start":{"line":21,"column":3},"end":{"line":23,"column":4}},"10":{"start":{"line":22,"column":4},"end":{"line":22,"column":65}},"11":{"start":{"line":22,"column":4},"end":{"line":22,"column":39}},"12":{"start":{"line":25,"column":3},"end":{"line":25,"column":17}},"13":{"start":{"line":30,"column":0},"end":{"line":30,"column":13}}},"branchMap":{"1":{"type":"if","line":22,"locations":[{"start":{"line":22,"column":4},"end":{"line":22,"column":4}},{"start":{"line":22,"column":4},"end":{"line":22,"column":4}}]}},"fnMap":{"1":{"name":"map","line":8,"loc":{"start":{"line":8,"column":2},"end":{"line":16,"column":3}}},"2":{"name":"map","line":18,"loc":{"start":{"line":18,"column":2},"end":{"line":26,"column":3}}}}};
};
module.exports = function(Helper, Type) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[1]++;
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[2]++;
	var __ks_Object = {};
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[3]++;
	Helper.newClassMethod({
		class: Object,
		name: "map",
		sealed: __ks_Object,
		function: function(object, iterator) {
			if(object === undefined || object === null) {
				throw new Error("Missing parameter 'object'");
			}
			if(!Type.isObject(object)) {
				throw new Error("Invalid type for parameter 'object'");
			}
			if(iterator === undefined || iterator === null) {
				throw new Error("Missing parameter 'iterator'");
			}
			if(!Type.isFunction(iterator)) {
				throw new Error("Invalid type for parameter 'iterator'");
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].f[1]++;
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[4]++;
			let results = [];
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[5]++;
			for(let item in object) {
				let index = object[item];
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[6]++;
				results.push(iterator(item, index));
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[7]++;
			return results;
		},
		signature: {
			access: 3,
			min: 2,
			max: 2,
			parameters: [
				{
					type: "Object",
					min: 1,
					max: 1
				},
				{
					type: "Function",
					min: 1,
					max: 1
				}
			]
		}
	});
	Helper.newClassMethod({
		class: Object,
		name: "map",
		sealed: __ks_Object,
		function: function(object, iterator, condition) {
			if(object === undefined || object === null) {
				throw new Error("Missing parameter 'object'");
			}
			if(!Type.isObject(object)) {
				throw new Error("Invalid type for parameter 'object'");
			}
			if(iterator === undefined || iterator === null) {
				throw new Error("Missing parameter 'iterator'");
			}
			if(!Type.isFunction(iterator)) {
				throw new Error("Invalid type for parameter 'iterator'");
			}
			if(condition === undefined || condition === null) {
				throw new Error("Missing parameter 'condition'");
			}
			if(!Type.isFunction(condition)) {
				throw new Error("Invalid type for parameter 'condition'");
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].f[2]++;
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[8]++;
			let results = [];
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[9]++;
			for(let item in object) {
				let index = object[item];
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[10]++;
				if(condition(item, index)) {
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].b[1][0]++;
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[11]++;
					results.push(iterator(item, index));
				}
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[12]++;
			return results;
		},
		signature: {
			access: 3,
			min: 3,
			max: 3,
			parameters: [
				{
					type: "Object",
					min: 1,
					max: 1
				},
				{
					type: "Function",
					min: 2,
					max: 2
				}
			]
		}
	});
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/_object.ks"].s[13]++;
	return {
		Object: Object,
		__ks_Object: __ks_Object
	};
}