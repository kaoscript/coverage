var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"]) {
	__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"] = {"path":"/fixtures/compile/macro.color.enum.import.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0,"2":0,"3":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":28}},"2":{"start":{"line":3,"column":0},"end":{"line":39,"column":1}},"3":{"start":{"line":41,"column":0},"end":{"line":44,"column":1}},"4":{"start":{"line":46,"column":0},"end":{"line":60,"column":2}}},"branchMap":{},"fnMap":{"1":{"name":"registerSpace","line":36,"loc":{"start":{"line":36,"column":1},"end":{"line":36,"column":27}}},"2":{"name":"getField","line":37,"loc":{"start":{"line":37,"column":1},"end":{"line":37,"column":15}}},"3":{"name":"setField","line":38,"loc":{"start":{"line":38,"column":1},"end":{"line":38,"column":22}}}}};
};
require("kaoscript/register");
var Dictionary = require("@kaoscript/runtime").Dictionary;
module.exports = function() {
	__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"].s[1]++;
	var Space = require("./export.enum.space.ks")().Space;
	__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"].s[2]++;
	class Color {
		constructor() {
			this.__ks_init();
			this.__ks_cons(arguments);
		}
		__ks_init() {
		}
		__ks_cons(args) {
			if(args.length !== 0) {
				throw new SyntaxError("Wrong number of arguments");
			}
		}
		__ks_func_getField_0(name) {
			if(arguments.length < 1) {
				throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
			}
			if(name === void 0 || name === null) {
				throw new TypeError("'name' is not nullable");
			}
			__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"].f[2]++;
		}
		getField() {
			if(arguments.length === 1) {
				return Color.prototype.__ks_func_getField_0.apply(this, arguments);
			}
			throw new SyntaxError("Wrong number of arguments");
		}
		__ks_func_setField_0(name, value) {
			if(arguments.length < 2) {
				throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 2)");
			}
			if(name === void 0 || name === null) {
				throw new TypeError("'name' is not nullable");
			}
			if(value === void 0 || value === null) {
				throw new TypeError("'value' is not nullable");
			}
			__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"].f[3]++;
		}
		setField() {
			if(arguments.length === 2) {
				return Color.prototype.__ks_func_setField_0.apply(this, arguments);
			}
			throw new SyntaxError("Wrong number of arguments");
		}
		static __ks_sttc_registerSpace_0(data) {
			if(arguments.length < 1) {
				throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
			}
			if(data === void 0 || data === null) {
				throw new TypeError("'data' is not nullable");
			}
			__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"].f[1]++;
		}
		static registerSpace() {
			if(arguments.length === 1) {
				return Color.__ks_sttc_registerSpace_0.apply(this, arguments);
			}
			throw new SyntaxError("Wrong number of arguments");
		}
	}
	__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"].s[3]++;
	Space.HSB = Space("hsb");
	Space.HSL = Space("hsl");
	__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"].s[4]++;
	Color.registerSpace((() => {
		const d = new Dictionary();
		d.name = Space.HSL;
		d["components"] = (() => {
			const d = new Dictionary();
			d["hue"] = (() => {
				const d = new Dictionary();
				d.family = Space.HSB;
				d["field"] = "_hue";
				return d;
			})();
			d["saturation"] = (() => {
				const d = new Dictionary();
				d.family = Space.HSB;
				d["field"] = "_saturation";
				return d;
			})();
			d["lightness"] = (() => {
				const d = new Dictionary();
				d["max"] = 100;
				d["round"] = 1;
				d["field"] = "_lightness";
				return d;
			})();
			return d;
		})();
		return d;
	})());
	Color.prototype.__ks_func_hue_0 = function() {
		return this.getField("hue");
	};
	Color.prototype.__ks_func_hue_1 = function(value) {
		if(arguments.length < 1) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
		}
		if(value === void 0 || value === null) {
			throw new TypeError("'value' is not nullable");
		}
		return this.setField("hue", value);
	};
	Color.prototype.__ks_func_saturation_0 = function() {
		return this.getField("saturation");
	};
	Color.prototype.__ks_func_saturation_1 = function(value) {
		if(arguments.length < 1) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
		}
		if(value === void 0 || value === null) {
			throw new TypeError("'value' is not nullable");
		}
		return this.setField("saturation", value);
	};
	Color.prototype.__ks_func_lightness_0 = function() {
		return this.getField("lightness");
	};
	Color.prototype.__ks_func_lightness_1 = function(value) {
		if(arguments.length < 1) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 1)");
		}
		if(value === void 0 || value === null) {
			throw new TypeError("'value' is not nullable");
		}
		return this.setField("lightness", value);
	};
	Color.prototype.hue = function() {
		if(arguments.length === 0) {
			return Color.prototype.__ks_func_hue_0.apply(this);
		}
		else if(arguments.length === 1) {
			return Color.prototype.__ks_func_hue_1.apply(this, arguments);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	Color.prototype.saturation = function() {
		if(arguments.length === 0) {
			return Color.prototype.__ks_func_saturation_0.apply(this);
		}
		else if(arguments.length === 1) {
			return Color.prototype.__ks_func_saturation_1.apply(this, arguments);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
	Color.prototype.lightness = function() {
		if(arguments.length === 0) {
			return Color.prototype.__ks_func_lightness_0.apply(this);
		}
		else if(arguments.length === 1) {
			return Color.prototype.__ks_func_lightness_1.apply(this, arguments);
		}
		throw new SyntaxError("Wrong number of arguments");
	};
};