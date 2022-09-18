import { dateParse } from './dateParse';

/**
 * @description 格式化日期
 * @param { number|string|Date } date 日期
 * @param { string } fmt yyyy MM dd hh mm ss 格式化方式
 * @return { string } 格式化之后的时间字符串
 */
export const dateFormat = (date: number | string | object, fmt: string) => {
  const time = dateParse(date);
  const o: { [x: string]: number } = {
    'M+': time.getMonth() + 1, // 月份
    'd+': time.getDate(), // 日
    'D+': time.getDate(), // 日
    'h+': time.getHours(), // 小时
    'H+': time.getHours(), // 小时
    'm+': time.getMinutes(), // 分
    's+': time.getSeconds(), // 秒
    'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
    S: time.getMilliseconds(), // 毫秒
  };

  let result = fmt;
  if (/(y+)/i.test(result)) {
    result = result.replace(RegExp.$1, (`${time.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach((k) => {
    if (new RegExp(`(${k})`).test(result)) {
      result = result.replace(RegExp.$1, (RegExp.$1.length === 1) ? (String(o[k])) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
    }
  });
  return result;
};
