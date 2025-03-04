if (navigator.permisions){
    navigator.permissions.query({name: 'bluetooth'}).then(function (result){
        log('Bluetooth', result);
    });
}
