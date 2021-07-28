//定义没有依赖的模块
define(function () {
    let name = 'atguigu.com';

    function getName() {
        return name.toUpperCase(); //toUpperCase() --> 将字符转换大写
    }

    //暴露模块
    return { getName }
})