/*
	Note to self: Do NOT read userAgent
*/

assertFirefox(navigator.oscpu);

assertFirefox(navigator.productSub == '20100101');
assertWebkit(navigator.productSub != '20100101');

assertFirefox(!navigator.vendor);
assertWebkit(navigator.vendor == "Google Inc.");
