var __ks_coverage = (function(_export) {
	return typeof _export.__ks_coverage === 'undefined' ? _export.__ks_coverage = {} : _export.__ks_coverage;
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if(!__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"]) {
	__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"] = {"path":"/fixtures/compile/switch.stmt.prime.ks","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{"1":[0,0,0,0]},"f":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":1}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":15}},"3":{"start":{"line":7,"column":0},"end":{"line":12,"column":1}},"4":{"start":{"line":8,"column":9},"end":{"line":8,"column":28}},"5":{"start":{"line":9,"column":19},"end":{"line":9,"column":49}},"6":{"start":{"line":10,"column":13},"end":{"line":10,"column":34}},"7":{"start":{"line":11,"column":8},"end":{"line":11,"column":36}}},"branchMap":{"1":{"type":"switch","line":7,"locations":[{"start":{"line":8,"column":1},"end":{"line":8,"column":28}},{"start":{"line":9,"column":1},"end":{"line":9,"column":49}},{"start":{"line":10,"column":1},"end":{"line":10,"column":34}},{"start":{"line":11,"column":5},"end":{"line":11,"column":36}}]}},"fnMap":{}};
};
module.exports = function() {
	__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].s[1]++;
	__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].s[2]++;
	let number = 13;
	__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].s[3]++;
	if(number === 1) {
		__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].b[1][0]++;
		__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].s[4]++;
		console.log("One!");
	}
	else if(number === 2 || number === 3 || number === 5 || number === 7 || number === 11) {
		__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].b[1][1]++;
		__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].s[5]++;
		console.log("This is a prime");
	}
	else if(number >= 13 && number <= 19) {
		__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].b[1][2]++;
		__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].s[6]++;
		console.log("A teen");
	}
	else {
		__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].b[1][3]++;
		__ks_coverage["/fixtures/compile/switch.stmt.prime.ks"].s[7]++;
		console.log("Ain't special");
	}
}