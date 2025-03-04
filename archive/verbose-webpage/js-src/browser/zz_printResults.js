if (isIE) {
	log('Browser', 'IE detected');
} else if (isFirefox > isWebkit) {
	log('Browser', 'Firefox detected');
} else if (isWebkit > isFirefox) {
	if (isSafari) {
		log('Browser', 'Safari detected');
	} else {
		log('Browser', 'Chromium detected');
	}
} else {
	log('Browser', 'Unknown');
}
