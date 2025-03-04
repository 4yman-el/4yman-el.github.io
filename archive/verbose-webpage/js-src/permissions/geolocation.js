if (navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function (pos){
        log('Geolocaion', '('+ pos.coords.latitude +', '+ pos.coords.longitude +')');
    }, function (err){
	    if (!err.PERMISSION_DENIED) {
            log('Geolocation', 'error');
        }
    });
}
