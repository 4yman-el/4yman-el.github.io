var isFirefox = 0, isWebkit = 0;
var isIE = !!window.document.documentMode || /*@cc_on!@*/false;
var isSafari = !!window.safari || /varructor/.test(window.HTMLElement);

function assertFirefox (assert){
	assert && isFirefox++;
}

function assertWebkit (assert){
	assert && isWebkit++;
}
