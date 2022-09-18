/**
 * @description 将数字转换成价格
 * @param { number|string } number 数字
 * @param { boolean } penny 传入的数字是否是单位是分
 * @param { string } unit 价格单位，默认人名币
 * @param { boolean } unitAtFront 单位是否加在数字前面
 * @return { string } 转换完成后的值
 */
export const toPrice = (number: number | string, penny: boolean = true, unit: string = '￥', unitAtFront: boolean = true) => {
  if (!number && number !== 0) return '';
  let price;
  if (typeof number === 'number') {
    price = number;
  } else {
    const str = String(number || '');
    if (/(\d+(\.\d+)?)/.test(str)) {
      price = parseFloat(RegExp.$1);
    }
  }
  price = price || 0;
  if (penny) {
    price /= 100;
  }
  return unitAtFront ? `${unit}${price.toFixed(2)}` : `${price.toFixed(2)}${unit}`;
};
