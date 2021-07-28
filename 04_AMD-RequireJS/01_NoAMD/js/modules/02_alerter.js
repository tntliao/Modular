(function (window, dataServer) {
    let name = 'Tom'

    function showMsg() {
        alert(dataServer.getMsg() + ',' + name);
    }

    window.alerter = { showMsg }
})(window, dataServer)