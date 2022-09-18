/**
 * @desc 类型检测
 * @param {any} o 待检测值
 */
export const type = (o: any) => {
  const s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)![1].toLowerCase();
};

[
  'Null',
  'Undefined',
  'Object',
  'Array',
  'String',
  'Number',
  'Boolean',
  'Function',
  'RegExp',
  'Symbol',
  'Date',
].forEach((t) => {
  // @ts-ignore
  type[`is${t}`] = (o: any) => type(o) === t.toLowerCase();
});
