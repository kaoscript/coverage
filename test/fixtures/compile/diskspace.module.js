var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/diskspace.module.ks"]) {
	__ks_coverage["/fixtures/compile/diskspace.module.ks"] = {"path":"/fixtures/compile/diskspace.module.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":21}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":22}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":128}},"4":{"start":{"line":6,"column":0},"end":{"line":24,"column":1}},"5":{"start":{"line":7,"column":1},"end":{"line":7,"column":49}},"6":{"start":{"line":9,"column":1},"end":{"line":9,"column":15}},"7":{"start":{"line":10,"column":1},"end":{"line":10,"column":27}},"8":{"start":{"line":11,"column":1},"end":{"line":21,"column":2}},"9":{"start":{"line":12,"column":2},"end":{"line":20,"column":3}},"10":{"start":{"line":13,"column":3},"end":{"line":19,"column":5}},"11":{"start":{"line":23,"column":1},"end":{"line":23,"column":13}},"12":{"start":{"line":26,"column":0},"end":{"line":26,"column":12}}},"branchMap":{"1":{"type":"if","line":12,"locations":[{"start":{"line":12,"column":2},"end":{"line":12,"column":2}},{"start":{"line":12,"column":2},"end":{"line":12,"column":2}}]}},"fnMap":{"1":{"name":"disks","line":6,"loc":{"start":{"line":6,"column":0},"end":{"line":24,"column":1}}}}};
};
require("kaoscript/register");
var {Dictionary, Type} = require("@kaoscript/runtime");
module.exports = function() {
	__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[1]++;
	var {String, __ks_String} = require("./_string.ks")();
	__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[2]++;
	var exec = require("child_process").exec;
	__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[3]++;
	const df_regex = /([\/[a-z0-9\-\_\s]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+%)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+%)\s+(\/.*)/i;
	__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[4]++;
	function disks(__ks_cb) {
		if(arguments.length < 1) {
			throw new SyntaxError("Wrong number of arguments (" + arguments.length + " for 0 + 1)");
		}
		else if(!Type.isFunction(__ks_cb)) {
			throw new TypeError("'callback' must be a function");
		}
		__ks_coverage["/fixtures/compile/diskspace.module.ks"].f[1]++;
		__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[5]++;
		exec("df -k", (__ks_e, __ks_0) => {
			if(__ks_e) {
				__ks_cb(__ks_e);
			}
			else {
				let stdout = __ks_0;
				__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[6]++;
				let disks = [];
				__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[7]++;
				let matches = null;
				__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[8]++;
				for(let __ks_1 = 0, __ks_2 = __ks_String._im_lines(stdout), __ks_3 = __ks_2.length, line; __ks_1 < __ks_3; ++__ks_1) {
					line = __ks_2[__ks_1];
					__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[9]++;
					let __ks_4;
					if(Type.isValue(__ks_4 = df_regex.exec(line)) ? (matches = __ks_4, true) : false) {
						__ks_coverage["/fixtures/compile/diskspace.module.ks"].b[1][0]++;
						__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[10]++;
						disks.push((() => {
							const d = new Dictionary();
							d.device = matches[1].trim();
							d.mount = matches[9];
							d.total = __ks_String._im_toInt(matches[2]) * 1024;
							d.used = __ks_String._im_toInt(matches[3]) * 1024;
							d.available = __ks_String._im_toInt(matches[4]) * 1024;
							return d;
						})());
					}
				}
				__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[11]++;
				return __ks_cb(null, disks);
			}
		});
	}
	__ks_coverage["/fixtures/compile/diskspace.module.ks"].s[12]++;
	return {
		disks: disks
	};
};