var count = (function () {
	"use strict";
	var counter = 1;
	return {
	  set value(i) {
	    counter += i;
	    return counter;
	  },
	  get value() { return counter },
	  reset() {
	    counter = 1;
	  }
	};
})();
count.value
count.value = 1
count.value
count.value = 1
count.value
count.value = 1
count.value