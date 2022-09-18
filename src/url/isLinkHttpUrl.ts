/**
 * @description 链接是否是http链接，区分web链接和原生统跳链接用
 * @param { string } link 目标链接
 * @return { boolean }
 */
export const isLinkHttpUrl = (link:string) => /^https?:\/\//.test(link);
