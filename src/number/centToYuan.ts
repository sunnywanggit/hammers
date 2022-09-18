/**
 * @description 分转换成元
 * @param { number } num 需要被转换的数值
 * @return { string } 转换完成之后的值
 */
export const centToYuan = (num: number) => {
  if (!num || num <= 0) return '0.00';
  return Number(num * 0.01).toFixed(2);
};
