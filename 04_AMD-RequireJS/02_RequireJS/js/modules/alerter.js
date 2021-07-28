//定义有依赖的模块
define(['dataService', 'jquery'], function (dataService, $) {
    let msg = 'alerter.js';

    function showMsg() {
        alert(dataService.getName() + ',' + msg);
        $('body').css('background', 'pink');
    }

    //暴露模块
    return { showMsg };
});