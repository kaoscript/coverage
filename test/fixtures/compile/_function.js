var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/_function.ks"]) {
	__ks_coverage["/fixtures/compile/_function.ks"] = {"path":"/fixtures/compile/_function.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":20}},"2":{"start":{"line":3,"column":0},"end":{"line":4,"column":1}},"3":{"start":{"line":6,"column":0},"end":{"line":14,"column":1}},"4":{"start":{"line":9,"column":3},"end":{"line":11,"column":4}},"5":{"start":{"line":10,"column":4},"end":{"line":10,"column":53}},"6":{"start":{"line":16,"column":0},"end":{"line":16,"column":15}}},"branchMap":{},"fnMap":{"1":{"name":"vcurry","line":7,"loc":{"start":{"line":7,"column":1},"end":{"line":12,"column":3}}},"2":{"name":"(anonymous_2)","line":9,"loc":{"start":{"line":9,"column":10},"end":{"line":11,"column":4}}}}};
};
module.exports = function(Helper, Type) {
	__ks_coverage["/fixtures/compile/_function.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/_function.ks"].s[2]++;
	var __ks_Function = {};
	__ks_coverage["/fixtures/compile/_function.ks"].s[3]++;
	__ks_Function.__ks_sttc_vcurry_0 = function(self, bind, ...args) {
		if(arguments.length < 2) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 2)");
		}
		if(self === void 0 || self === null) {
			throw new TypeError("'self' is not nullable");
		}
		else if(!Type.isFunction(self)) {
			throw new TypeError("'self' is not of type 'Function'");
		}
		if(bind === void 0) {
			bind = null;
		}
		__ks_coverage["/fixtures/compile/_function.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/_function.ks"].s[4]++;
		return function(...additionals) {
			__ks_coverage["/fixtures/compile/_function.ks"].f[2]++;
			__ks_coverage["/fixtures/compile/_function.ks"].s[5]++;
			return self.apply(bind, args.concat(additionals));
		};
	};
	__ks_Function._cm_vcurry = function() {
		var args = Array.prototype.slice.call(arguments);
		return __ks_Function.__ks_sttc_vcurry_0.apply(null, args);
	};
	__ks_coverage["/fixtures/compile/_function.ks"].s[6]++;
	return {
		Function: Function,
		__ks_Function: __ks_Function
	};
};