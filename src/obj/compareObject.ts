import { ObjectInterface } from '../../index';

/**
 * @description 比较两个对象是否相等（支持深层次对象进行比较）
 * @param { Object } o1 等待被比较的目标对象
 * @param { Object } o2 等待被比较的目标对象
 * @return { boolean } 是否相等
 */
export const compareObject = (o1: ObjectInterface, o2: ObjectInterface) => {
  if (!o1 && !o2) return o1 === o2;
  if ((o1 && !o2) || (!o1 && o2)) return false;
  if (typeof o1 !== 'object' || typeof o2 !== 'object') return o1 === o2;
  const o1Keys = Object.keys(o1).sort();
  const o2Keys = Object.keys(o2).sort();
  // 键值对数量不一致说明不相等
  if (o1Keys.length !== o2Keys.length) return false;
  const keysLength = o1Keys.length;
  for (let i = 0; i < keysLength; i += 1) {
    // 键名数组不匹配说明不相等
    if (o1Keys[i] !== o2Keys[i]) return false;
  }
  for (let i = 0; i < keysLength; i += 1) {
    const o1Value = o1[o1Keys[i]];
    const o2Value = o2[o2Keys[i]];
    const o1ValueType = typeof o1Value;
    const o2ValueType = typeof o2Value;
    // 同一键对应值类型不匹配说明不相等
    if (o1ValueType !== o2ValueType) return false;
    // 类型匹配时需要对对象类型做特殊处理，也即深比较
    if (o1ValueType === 'object') {
      // 深比较结果不匹配说明不相等
      if (!compareObject(o1Value, o2Value)) return false;
    } else {
      // 单纯不相等说明不匹配
      // eslint-disable-next-line no-lonely-if
      if (o1Value !== o2Value) return false;
    }
  }
  return true;
};
