// This file is generated AUTOMATICALLY

if(navigator.doNotTrack == 1) {
    log('Do Not Track', 'enabled');
}
if (history.length > 1){
    log('History', history.length + ' entries');
}
if (window !== window.parent){
	log('Iframe', 'detected');
}
log('Language', 'Main: ' + navigator.language);
log('Language', 'Other: ' + navigator.languages.join(', ') + '.');
log('Platform', navigator.platform || 'unknown');
if (document.referrer){
	log('Referrer', document.referrer);
}
var scrW = screen.width;
var scrH = screen.height;

log('Screen', scrW + 'x' + scrH + ' ' +screen.orientation.type);

if (screen.orientation){
	screen.orientation.addEventListener('change', function (){
		log('Screen', screen.orientation.type);
	});
}
if (window.Intl){
	log('Timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
}
var isFirefox = 0, isWebkit = 0;
var isIE = !!window.document.documentMode || /*@cc_on!@*/false;
var isSafari = !!window.safari || /varructor/.test(window.HTMLElement);

function assertFirefox (assert){
	assert && isFirefox++;
}

function assertWebkit (assert){
	assert && isWebkit++;
}
if (CSS && CSS.supports){
	assertFirefox(CSS.supports("-moz-user-focus", "normal"));
	assertFirefox(CSS.supports("-moz-box-sizing", "content-box"));
	assertWebkit(CSS.supports("-webkit-border-vertical-spacing", 0));
}
assertFirefox(Math.hypot(-24.42, -50.519999999999925) === 56.11244781686139);
assertWebkit(Math.hypot(-24.42, -50.519999999999925) === 56.1124478168614);
/*
	Note to self: Do NOT read userAgent
*/

assertFirefox(navigator.oscpu);

assertFirefox(navigator.productSub == '20100101');
assertWebkit(navigator.productSub != '20100101');

assertFirefox(!navigator.vendor);
assertWebkit(navigator.vendor == "Google Inc.");
assertFirefox(window.mozInnerScreenX !== undefined);
assertWebkit(window.webkitCancelAnimationFrame !== undefined);
assertWebkit(window.PERSISTENT !== undefined);
assertWebkit(window.chrome !== undefined);
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
if (typeof(window.ActiveXObject) != 'undefined') {
    log('ActiveX', 'enabled');
}
if (navigator.javaEnabled && navigator.javaEnabled()){
    log('Java', 'enabled');
}
if (navigator.getBattery){
    navigator.getBattery().then(function (battery){
        log(
			'Battery',
			battery.level*100 + '% ' + (battery.charging ? '' : 'not') + 'charging'
		);
    });
}
if (navigator.permisions){
    navigator.permissions.query({name: 'bluetooth'}).then(function (result){
        log('Bluetooth', result);
    });
}
if (navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function (pos){
        log('Geolocaion', '('+ pos.coords.latitude +', '+ pos.coords.longitude +')');
    }, function (err){
	    if (!err.PERMISSION_DENIED) {
            log('Geolocation', 'error');
        }
    });
}
if (Notification && Notification.requestPermission){
	Notification.requestPermission().then(function (result){
		(result == 'granted') && log('Notifications', result);
	});
}
