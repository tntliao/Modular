let uniq = require('uniq');
let module1 = require('./modules/01_module');
let module2 = require('./modules/02_module');
let module3 = require('./modules/03_module');

module1.foo();
module2();
module3.foo();
module3.bar();
let result = uniq(module3.arr);
console.log(result);