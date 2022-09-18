import { removeStyle } from './removeStyle';
import { Style } from '../../index';
/**
 * @description 插入css样式
 * @param { Object } styles styles是js对象，可以被转换成css规则，具体形式如下
 * {
 *   '.class-name': { // 选择器
 *     'overflow': 'hidden', // 各条属性
 *   },
 *   '@keyframes animation-name': { // 动画选择器
 *     'from': {
 *       'opacity': '1',
 *     },
 *     'to': {
 *       'opacity': '.6',
 *     }
 *   },
 * }
 * @param { string } id 生成的style id，可以选择保存下来在页面生命周期结束时移除
 */
export const insertStyle = (styles: Style, id: string) => {
  // 插入新样式前先将老样式删除
  removeStyle(id);

  // 构建合理的css样式字符串
  let cssText = '';
  Object.keys(styles).forEach((selector) => {
    if (selector.indexOf('@keyframes') === 0) {
      // 对动画声明做特殊处理
      const statusList = styles[selector];
      let cssItemText = '';
      Object.keys(statusList).forEach((status) => {
        const styleList = statusList[status];
        const styleTextList: string[] = [];
        Object.keys(styleList).forEach((key) => {
          styleTextList.push(`${key}:${styleList[key]}`);
        });
        cssItemText += `${status}{${styleTextList.join(';')}}`;
      });
      cssText += `${selector}{${cssItemText}}`;
    } else {
      const styleList = styles[selector];
      const styleTextList: string[] = [];
      Object.keys(styleList).forEach((key) => {
        styleTextList.push(`${key}:${styleList[key]}`);
      });
      cssText += `${selector}{${styleTextList.join(';')}}`;
    }
  });
  // 构建完毕后将字符串插入文档头部
  const style = document.createElement('style');
  style.id = id;
  style.type = 'text/css';
  style.appendChild(document.createTextNode(cssText));
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
};
