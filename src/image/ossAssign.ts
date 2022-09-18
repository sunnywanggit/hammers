import { ObjectInterface } from '../../index';

/**
 * @description 将一级子属性融合进oss属性中
 * @param { Array } options
 * @param { Object } childOption
 * @return { Array } 含有属性对象的数组
 */

export const ossAssign = (options: Array<any>, childOption: ObjectInterface) => {
  // 先在oss属性中找到这个子属性
  let localOption: ObjectInterface = {};
  for (let i = 0; i < options.length; i += 1) {
    const option = options[i];
    if (option.name === childOption.name) {
      localOption = option;
      break;
    }
  }
  // 找不到子属性直接将属性注入
  if (Object.keys(localOption).length === 0) {
    options.push(childOption);
    return;
  }
  // 找到子属性后将要注入的三级属性一一注入
  childOption.values.forEach((value: { name: string; value: any; }) => {
    const { values } = localOption;
    let i = 0;
    for (; i < values.length; i += 1) {
      const localValue = values[i];
      if (localValue.name === value.name) {
        localValue.value = value.value;
        break;
      }
    }
    // 如果找不到直接注入
    if (i >= values.length) {
      values.push(value);
    }
  });
};
