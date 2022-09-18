/**
 * @description 返回设置的指定日期
 * @param { number } d 天数 1明天 0今天 -1昨天(默认为0)
 * @return { string } 指定日期的时间字符串
 *
 * 1：明天 2018-09-14
 * 0：今天 2018-09-13
 * -1：昨天 2018-09-12
 */
export const getOffsetDate = (d = 0) => {
  const now = Date.now();
  const date = new Date(now + d * 24 * 60 * 60 * 1000);
  const year = date.getFullYear();
  let mon: string | number = date.getMonth() + 1;
  mon = mon > 9 ? mon : `0${mon}`;
  let day: string | number = date.getDate();
  day = day > 9 ? day : `0${day}`;

  return `${year}-${mon}-${day}`;
};
