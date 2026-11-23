import array from "lodash";
//import {add,subtract} from "./addition.js";
import math from "./addition.js";

const a=[1,2,3,4,5];
console.log("Array a:",a);
console.log("reverse array",array.reverse(a));
console.log(`sum of 2 and 3 is: ${math.add(2,3)} difference of 5 and 2 is:${math.subtract(5,2)}`);


