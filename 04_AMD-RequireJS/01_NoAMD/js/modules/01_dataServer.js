(function (window) {
    let msg = 'atguigu.com';

    function getMsg() {
        return msg.toUpperCase(); //把字符串转换为大写
    }

    window.dataServer = {getMsg}
})(window)