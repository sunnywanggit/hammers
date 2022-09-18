/**
 * @description 保留指定小数位数
 * @param { number } number 需要保留指定小数位数的值
 * @param { number } digit 小数位数
 * @return { number } 小数位数保留成功之后的值
 * 注意：该函数默认保留两位小数！
 */

export const toFixed = (number: number, digit: number = 2) => {
  const n = parseFloat(String(number));
  if (!n) return 0;
  const ratio = 10 ** digit;
  return Math.round(n * ratio) / ratio;
};
