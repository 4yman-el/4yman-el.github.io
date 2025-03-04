if (Notification && Notification.requestPermission){
	Notification.requestPermission().then(function (result){
		(result == 'granted') && log('Notifications', result);
	});
}
