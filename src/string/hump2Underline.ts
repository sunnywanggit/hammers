/**
 * @description 字符串驼峰转下划线
 * @param { string } str 等待被转换的字符串
 * @return { string } 转换完成的字符串
 */
export const hump2Underline = (str: string) => str.replace(/([A-Z])/g, '_$1').toLowerCase();
