/** 
 * @type {(a:number, b:number) => number} 
 * @description 自然数の足し算を行う
*/
const plus = (a, b) => {
    // 自然数かどうか判定
    for (const value of [a, b]) {
        if ( value < 1 || !Number.isInteger(value) ) {
            console.error("this number is not natural Number")
            return;
        }
    }
    return a+b;
}

plus(1, 2);

