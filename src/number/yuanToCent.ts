/**
 * @description 元转换成分
 * @param { number } yuan 需要被转换的数值
 * @param { number } digit 精度
 * @return { number } 转换完成后的值
 */
export const yuanToCent = (yuan: number, digit: number = 100) => {
  if (!yuan || yuan <= 0) return 0;

  let m = 0;
  const s1 = yuan.toString();
  const s2 = digit.toString();

  try {
    m += s1.split('.')[1].length;
    m += s2.split('.')[1].length;
  } catch (e) {
    //
  }

  // eslint-disable-next-line no-mixed-operators
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / (10 ** m);
};
