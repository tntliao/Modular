import { foo, bar } from './01_module';
import { DATA_ARR } from './01_module';
import { fun1, fun2 } from './02_module';
import module3 from './03_module';


foo();
bar();
console.log(DATA_ARR);
fun1();
fun2();

console.log(module3.name);
module3.setName('jiajia');
console.log(module3.name);
console.log(module3.arr[0]);