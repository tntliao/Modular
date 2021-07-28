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