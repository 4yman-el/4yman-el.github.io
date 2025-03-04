if (navigator.getBattery){
    navigator.getBattery().then(function (battery){
        log(
			'Battery',
			battery.level*100 + '% ' + (battery.charging ? '' : 'not') + 'charging'
		);
    });
}
