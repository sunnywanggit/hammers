/**
 * @description 千分位格式化
 * @param { number } number 数值
 * @return { string } 格式化完成后的值
 * */
export const toThousand = (number: number) => {
  let num = (number || 0).toString();
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return result;
};
