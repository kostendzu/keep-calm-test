import { ThirdBackTask } from "./third-back-test";
import { SecondBackTask } from "./second-back-task";
import {FirstBackTask} from "./first-back-task";

["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"]

describe('First task function tests', () => {

    it('right array with not finished sequence', () => {
        const actions = ["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"];
        const sessions = FirstBackTask.getResult(actions);
        expect(sessions).toBe(2);
    });

    it('right array with finished sequence', () => {
        const actions = ["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message", "end"];
        const sessions = FirstBackTask.getResult(actions);
        expect(sessions).toBe(3);
    });

    it('an array with wrong sequence', () => {
        const actions = ["start",  "end", "connect", "message", "start", "connect",  "end", "start", "message", "connect", "message", "end"];
        const sessions = FirstBackTask.getResult(actions);
        expect(sessions).toBe(0);
    });

    it('an array with wrong sequence length', () => {
        const actions = ["start",  "end"];
        expect(() =>  FirstBackTask.getResult(actions)).toThrow('actions string length is inValid');
    });

    it('an array with wrong actions', () => {
        const actions = ["start", "connect", "message", "end", "slash"];
        expect(() =>  FirstBackTask.getResult(actions)).toThrow('action string includes deprecated word slash');
    });
});

describe('Second task function tests', () => {

    it('18^111', () => {
        const a = 18;
        const b = 111;
        const remainder = SecondBackTask.getResult(a, b);
        expect(remainder).toBe(2);
    });

    it('3^3', () => {
        const a = 3;
        const b = 3;
        const remainder = SecondBackTask.getResult(a, b);
        expect(remainder).toBe(7);
    });

    it(' a value is not valid ', () => {
        const a = -3;
        const b = 3;
        expect(() =>  SecondBackTask.getResult(a, b)).toThrow('a value is not valid');
    });

    it(' b value is not valid ', () => {
        const a = 3;
        const b = -3;
        expect(() =>  SecondBackTask.getResult(a, b)).toThrow('b value is not valid');
    });
});

describe('Third task function tests', () => {

    it('should process string with single set of brackets', () => {
        const input = "2{4}3{23}";
        const output = ThirdBackTask.getResult(input);
        expect(output).toBe("44232323");
    });

    it('should process string with nested brackets', () => {
        const input = "4{93{2}}";
        const output = ThirdBackTask.getResult(input);
        expect(output).toBe("9222922292229222");
    });
});