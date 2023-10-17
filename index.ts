import { FirstBackTask } from "./first-back-task";
import { SecondBackTask} from "./second-back-task";
import { ThirdBackTask } from "./third-back-test";

const res1 = FirstBackTask.getResult(["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"]);
console.log(res1);

const res2 = SecondBackTask.getResult(18,111111)
console.log(res2);

let res3: string;
res3 = ThirdBackTask.getResult("2{2{8}3{23}}");
console.log(res3);

