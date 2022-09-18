import { ObjectInterface } from '../../index';

/**
 * @description 对象深拷贝 （如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失,把 NaN 变成 null)
 * @param { Object } obj 目标对象
 * @return { Object } 拷贝后的对象
 * 注意：对于不能序列化的属性如 File，拷贝之后会丢失
 */
export const shallowClone = (obj: ObjectInterface) => JSON.parse(JSON.stringify(obj));
