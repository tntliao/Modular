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