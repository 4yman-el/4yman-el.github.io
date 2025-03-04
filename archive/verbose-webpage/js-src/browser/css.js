if (CSS && CSS.supports){
	assertFirefox(CSS.supports("-moz-user-focus", "normal"));
	assertFirefox(CSS.supports("-moz-box-sizing", "content-box"));
	assertWebkit(CSS.supports("-webkit-border-vertical-spacing", 0));
}
