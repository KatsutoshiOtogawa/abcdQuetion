// @ts-check
/** 
 * @type {() => number[][]} 戻り値は答えの組み合わせを配列で返す。インデックスが若い方からa, b, c, dとする。
 * @description a+b+c+d=a*b*c*dを満たす自然数を求める関数。
*/
const abcdQuetion = () => {
  // a*b*c*d=a+b+c+dを変形すると
  // 1<=abcd=a+b+c+d≦4d=d+d+d+d
  // よって下記のことが成り立つのでループで探せば良い。
  // 1 <=abc<=4 (dも同じことが言える。)
  /** 
   * @type {number[][]} 
   * @description インデックスが若い方からa, b, c, dと値を入れる。
  */
  const result = [];
  for (let a = 1;a <= 4;a++) {
    for (let b = 1;b <= 4;b++) {
      for (let c = 1;c <= 4;c++) {
        for (let d = 1;d <= 4;d++) {
          if (a + b + c + d == a * b * c * d) {
            result.push([a, b, c, d]);
          }
        }
      }
    }
  }
  return result;
}

const answer = abcdQuetion();
console.log(answer);
console.log(answer.length);
