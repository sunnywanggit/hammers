import { objectMerge } from '../../src/obj/objectMerge';

describe('objectMerge', () => {
  it('合并两个空对象', () => {
    const obj1 = {};
    const obj2 = {};
    const result = objectMerge(obj1, obj2);
    const validator = {};
    expect(result).toEqual(validator);
  });

  it('合并两个具有不同属性的单层级对象对象', () => {
    const obj1 = { name: 'wangzhen' };
    const obj2 = { age: 20 };
    const result = objectMerge(obj1, obj2);
    const validator = { name: 'wangzhen', age: 20 };
    expect(result).toEqual(validator);
  });

  it('合并两个具有相同属性单层级对象的对象', () => {
    const obj1 = { name: 'wangzhen', age: 18 };
    const obj2 = { name: 'dachui', age: 20 };
    const result = objectMerge(obj1, obj2);
    const validator = { name: 'dachui', age: 20 };
    expect(JSON.stringify(result)).toBe(JSON.stringify(validator));
  });

  it('合并两个具有不同属性的多层级对象对象', () => {
    const obj1 = { userInfo: { name: 'wangzhen' } };
    const obj2 = { userInfo: { age: 20 } };
    const result = objectMerge(obj1, obj2);
    const validator = { userInfo: { name: 'wangzhen', age: 20 } };
    expect(result).toEqual(validator);
  });

  it('合并两个具有相同属性多层级对象的对象', () => {
    const obj1 = { userInfo: { name: 'wangzhen', age: 18 } };
    const obj2 = { userInfo: { name: 'dachui', age: 20 } };
    const result = objectMerge(obj1, obj2);
    const validator = { userInfo: { name: 'dachui', age: 20 } };
    expect(JSON.stringify(result)).toBe(JSON.stringify(validator));
  });
});
