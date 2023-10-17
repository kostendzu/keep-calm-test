import {
    ALLOWED_COMMANDS_ARRAY,
    FIRST_BACK_TASK_MAX_STRING_LENGTH,
    FIRST_BACK_TASK_MIN_STRING_LENGTH
} from "./constants";
import { Injectable } from '@nestjs/common'

@Injectable()
export class FirstBackTask {

    private static validation(actions: string[]){
        if (actions.length <= FIRST_BACK_TASK_MIN_STRING_LENGTH || actions.length >= FIRST_BACK_TASK_MAX_STRING_LENGTH)
            throw new Error('actions string length is inValid')

        actions.forEach((action) => {
            if (!ALLOWED_COMMANDS_ARRAY.includes(action))
                throw new Error(`action string includes deprecated word ${action}`)
        })
    }
    public static getResult(actions: string[]): number {
        this.validation(actions);

        const actionsString = actions.join(',');
        const allowedCommandsArrayString = ALLOWED_COMMANDS_ARRAY.join(',');

        const sessions = actionsString.match(new RegExp(allowedCommandsArrayString, 'g'));
        return sessions ? sessions.length : 0;
    }

}



