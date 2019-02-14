var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"]) {
	__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"] = {"path":"/fixtures/compile/macro.color.enum.import.ks","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":28}},"2":{"start":{"line":3,"column":0},"end":{"line":36,"column":1}},"3":{"start":{"line":38,"column":0},"end":{"line":41,"column":1}},"4":{"start":{"line":43,"column":0},"end":{"line":57,"column":2}}},"branchMap":{},"fnMap":{}};
};
require("kaoscript/register");
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
				throw new SyntaxError("wrong number of arguments");
			}
		}
	}
	__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"].s[3]++;
	Space.HSB = "hsb";
	Space.HSL = "hsl";
	__ks_coverage["/fixtures/compile/macro.color.enum.import.ks"].s[4]++;
	Color.registerSpace({
		name: Space.HSL,
		"components": {
			"hue": {
				family: Space.HSB,
				"field": "_hue"
			},
			"saturation": {
				family: Space.HSB,
				"field": "_saturation"
			},
			"lightness": {
				"max": 100,
				"round": 1,
				"field": "_lightness"
			}
		}
	});
	Color.prototype.__ks_func_hue_0 = function() {
		return this.getField("hue");
	};
	Color.prototype.__ks_func_hue_1 = function(value) {
		if(arguments.length < 1) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
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
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
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
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
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
		throw new SyntaxError("wrong number of arguments");
	};
	Color.prototype.saturation = function() {
		if(arguments.length === 0) {
			return Color.prototype.__ks_func_saturation_0.apply(this);
		}
		else if(arguments.length === 1) {
			return Color.prototype.__ks_func_saturation_1.apply(this, arguments);
		}
		throw new SyntaxError("wrong number of arguments");
	};
	Color.prototype.lightness = function() {
		if(arguments.length === 0) {
			return Color.prototype.__ks_func_lightness_0.apply(this);
		}
		else if(arguments.length === 1) {
			return Color.prototype.__ks_func_lightness_1.apply(this, arguments);
		}
		throw new SyntaxError("wrong number of arguments");
	};
};