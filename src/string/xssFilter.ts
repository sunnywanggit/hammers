import xss from 'xss';

/**
 * @description 将传入字符串进行xss攻击过滤
 * @param { string } content 需要被过滤的字符串
 * @return { string } 过滤完成的字符串
 */
export const xssFilter = (content: string) => (content ? xss(content) : '');
