var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/diskspace.test.ks"]) {
	__ks_coverage["/fixtures/compile/diskspace.test.ks"] = {"path":"/fixtures/compile/diskspace.test.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"b":{},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":7,"column":1}},"2":{"start":{"line":9,"column":0},"end":{"line":12,"column":1}},"3":{"start":{"line":14,"column":0},"end":{"line":24,"column":2}},"4":{"start":{"line":15,"column":1},"end":{"line":23,"column":3}},"5":{"start":{"line":16,"column":2},"end":{"line":16,"column":23}},"6":{"start":{"line":18,"column":2},"end":{"line":18,"column":35}},"7":{"start":{"line":20,"column":2},"end":{"line":20,"column":16}},"8":{"start":{"line":22,"column":2},"end":{"line":22,"column":8}}},"branchMap":{},"fnMap":{"1":{"name":"(anonymous_1)","line":14,"loc":{"start":{"line":14,"column":22},"end":{"line":24,"column":1}}},"2":{"name":"(anonymous_2)","line":15,"loc":{"start":{"line":15,"column":13},"end":{"line":23,"column":2}}}}};
};
require("kaoscript/register");
__ks_coverage["/fixtures/compile/diskspace.test.ks"].s[1]++;
__ks_coverage["/fixtures/compile/diskspace.test.ks"].s[2]++;
var expect = require("chai").expect;
var disks = require("./diskspace.module.ks")().disks;
__ks_coverage["/fixtures/compile/diskspace.test.ks"].s[3]++;
describe("diskspace", function() {
	__ks_coverage["/fixtures/compile/diskspace.test.ks"].f[1]++;
	__ks_coverage["/fixtures/compile/diskspace.test.ks"].s[4]++;
	it("print", function(done) {
		if(arguments.length < 1) {
			throw new SyntaxError("wrong number of arguments (" + arguments.length + " for 1)");
		}
		if(done === void 0 || done === null) {
			throw new TypeError("'done' is not nullable");
		}
		__ks_coverage["/fixtures/compile/diskspace.test.ks"].f[2]++;
		__ks_coverage["/fixtures/compile/diskspace.test.ks"].s[5]++;
		disks((__ks_e, d) => {
			__ks_coverage["/fixtures/compile/diskspace.test.ks"].s[6]++;
			expect(d).to.have.length.above(0);
			__ks_coverage["/fixtures/compile/diskspace.test.ks"].s[7]++;
			console.log(d);
			__ks_coverage["/fixtures/compile/diskspace.test.ks"].s[8]++;
			done();
		});
	});
});