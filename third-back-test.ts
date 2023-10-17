import { Injectable } from '@nestjs/common'

@Injectable()
export class ThirdBackTask {

   
    public static getResult(input: string): string {
        let regex = /(\d)\{([^\{\}]*)\}/;
        let str = input

        // Пока в строке есть скобки
        while (regex.test(str)) {
            str = str.replace(regex, (_, count, content) => {
                return content.repeat(Number(count));
            });
        }
        return str;
    }

}


