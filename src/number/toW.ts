/**
 * @description 数字转W（万元）
 * @param { number } n 数字
 * @return { number|string } 转换完成后的值
 */
export const toW = (n: number) => {
  const count = Number(n);
  if (count < 10000) {
    return count;
  }
  return `${(count / 10000).toFixed(1)}w`;
};
