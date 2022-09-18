// TODO 单元测试
/**
 * @description 二进制流转字符串
 * @param { DataView } dataView 流数据
 * @param { number } start 读取开始位置
 * @param { number } length 读取长度
 * @return { string } 转换完成后的字符串
 */
export const getStringFromDataView = (dataView: DataView, start: number, length: number) => {
  let str = '';
  const end = length + start;
  for (let i = start; i < end; i += 1) {
    str += String.fromCharCode(dataView.getUint8(i));
  }
  return str;
};
