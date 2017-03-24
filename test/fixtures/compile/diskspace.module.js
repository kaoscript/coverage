var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"]) {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"] = {"path":"/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":26}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":30}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":128}},"4":{"start":{"line":6,"column":0},"end":{"line":26,"column":1}},"5":{"start":{"line":7,"column":1},"end":{"line":7,"column":49}},"6":{"start":{"line":9,"column":1},"end":{"line":9,"column":15}},"7":{"start":{"line":10,"column":1},"end":{"line":10,"column":28}},"8":{"start":{"line":11,"column":1},"end":{"line":23,"column":2}},"9":{"start":{"line":12,"column":2},"end":{"line":12,"column":31}},"10":{"start":{"line":14,"column":2},"end":{"line":22,"column":3}},"11":{"start":{"line":15,"column":3},"end":{"line":21,"column":5}},"12":{"start":{"line":25,"column":1},"end":{"line":25,"column":13}},"13":{"start":{"line":28,"column":0},"end":{"line":28,"column":12}}},"branchMap":{"1":{"type":"if","line":14,"locations":[{"start":{"line":14,"column":2},"end":{"line":14,"column":2}},{"start":{"line":14,"column":2},"end":{"line":14,"column":2}}]}},"fnMap":{"1":{"name":"disks","line":6,"loc":{"start":{"line":6,"column":0},"end":{"line":26,"column":1}}}}};
};
require("kaoscript/register");
var Type = require("@kaoscript/runtime").Type;
module.exports = function() {
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[1]++;
	var {String, __ks_String} = require("./_string.ks")();
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[2]++;
	var exec = require("child_process").exec;
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[3]++;
	const df_regex = /([\/[a-z0-9\-\_\s]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+%)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+%)\s+(\/.*)/i;
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[4]++;
	function disks(__ks_cb) {
		if(arguments.length < 1) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
		}
		if(!Type.isFunction(__ks_cb)) {
			throw new TypeError("'callback' must be a function");
		}
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].f[1]++;
		__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[5]++;
		exec("df -k", (__ks_e, stdout, stderr) => {
			if(__ks_e) {
				return __ks_cb(__ks_e);
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[6]++;
			let disks = [];
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[7]++;
			let matches;
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[8]++;
			let __ks_0 = __ks_String._im_lines(stdout);
			for(let __ks_1 = 0, __ks_2 = __ks_0.length, line; __ks_1 < __ks_2; ++__ks_1) {
				line = __ks_0[__ks_1];
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[9]++;
				matches = df_regex.exec(line);
				__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[10]++;
				if(matches) {
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].b[1][0]++;
					__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[11]++;
					disks.push({
						device: matches[1].trim(),
						mount: matches[9],
						total: __ks_String._im_toInt(matches[2]) * 1024,
						used: __ks_String._im_toInt(matches[3]) * 1024,
						available: __ks_String._im_toInt(matches[4]) * 1024
					});
				}
			}
			__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[12]++;
			return __ks_cb(null, disks);
		});
	}
	__ks_coverage["/Users/baptiste/Development/Projects/Kaoscript/coverage-istanbul/test/fixtures/compile/diskspace.module.ks"].s[13]++;
	return {
		disks: disks
	};
}