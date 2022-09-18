/**
 * @description 将时间字符串|时间|Date对象戳转换成时间
 * @param { string|number|Object } date
 * @return { Object } Date对象
 */
export const dateParse = (date: string | number | object) => {
  try {
    if (!date) return new Date();
    if (typeof date === 'number') {
      return new Date(date);
    }
    if (date instanceof Date) return date;
    const dateStr = String(date);
    if (/^\d+$/.test(dateStr)) {
      return new Date(parseInt(dateStr, 10));
    }
    if (/[A-Z]/.test(dateStr)) {
      return new Date(dateStr);
    }
    return new Date(dateStr.replace(/-/g, '/'));
  } catch (error) {
    return new Date();
  }
};
