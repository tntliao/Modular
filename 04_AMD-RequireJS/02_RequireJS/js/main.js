(function () {
    requirejs.config({
        baseUrl: './js',
        paths: {
            /* 将右边的路径赋值给左边 */
            dataService: './modules/dataService',
            alerter: './modules/alerter',
            jquery: './libs/jquery-1.10.1'
        }
    });

    //引入使用模块
    requirejs(['alerter'], function (alerter) {
        alerter.showMsg();
    })
})()