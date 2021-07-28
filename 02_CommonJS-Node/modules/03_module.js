exports.foo = function () {
    console.log('module3 foo()');
}

exports.bar = function () {
    console.log('module bar()');
}

let arr = [3, 2, 1, 1, 2, 3, 4, 5]
exports.arr = arr;