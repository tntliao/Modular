(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = foo;
function foo() {
    console.log('module foo()');
}

var bar = exports.bar = function bar() {
    console.log('module1 bar()');
};

var DATA_ARR = exports.DATA_ARR = [1, 3, 5, 1];
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var data = 'module2 data';

function fun1() {
    console.log('module2 fun1' + data);
}

function fun2() {
    console.log('module2 fun()' + data);
}

exports.fun1 = fun1;
exports.fun2 = fun2;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'Tom',
    setName: function setName(name) {
        this.name = name;
    },
    arr: [1, 2, 3, 4]
};
},{}],4:[function(require,module,exports){
'use strict';

var _module = require('./01_module');

var _module2 = require('./02_module');

var _module3 = require('./03_module');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.foo)();
(0, _module.bar)();
console.log(_module.DATA_ARR);
(0, _module2.fun1)();
(0, _module2.fun2)();

console.log(_module4.default.name);
_module4.default.setName('jiajia');
console.log(_module4.default.name);
console.log(_module4.default.arr[0]);
},{"./01_module":1,"./02_module":2,"./03_module":3}]},{},[4]);
