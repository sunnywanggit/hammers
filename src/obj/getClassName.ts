// TODO 单元测试
/**
 * @description 获取类名
 * @param { Object } obj 目标对象
 * @return { string }
 */
export const getClassName = (obj: Object) => {
  if (obj && obj.constructor && obj.constructor.toString()) {
    if (obj.constructor.name) {
      return obj.constructor.name;
    }
    const str = obj.constructor.toString();
    let arr;
    if (str.charCodeAt(0) === 91) { // 匹配 [ 符号
      arr = str.match(/\w+\s∗(\w+)/);
    } else {
      arr = str.match(/function\s*(\w+)/);
    }
    if (arr && arr.length === 2) {
      return arr[1];
    }
  }
  return '';
};
