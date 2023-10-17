import { SECOND_BACK_TASK_MAX_NUM, SECOND_BACK_TASK_MIN_NUM } from "./constants";
import { Module, Injectable } from '@nestjs/common'

@Injectable()
export class SecondBackTask{

    private static getNOD(a: number, b: number) {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    private static validation(a: number, b: number){
        if (a < SECOND_BACK_TASK_MIN_NUM || a > SECOND_BACK_TASK_MAX_NUM)
            throw new Error('a value is not valid')

        if (b < SECOND_BACK_TASK_MIN_NUM || b > SECOND_BACK_TASK_MAX_NUM)
            throw new Error('b value is not valid')
    }
    public static getResult(a: number, b: number): number {
        this.validation(a,b);
        const NOD = this.getNOD(a,10);
        return (a/NOD*a ** ((b-1) % 4)) % (10/NOD)*NOD; // следует из теоремы Эйлера. Пригласите на собес - выведу вам формулу в тетрадочке
    }

}



