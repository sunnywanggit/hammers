import { shallowClone } from '../../src/obj/shallowClone';

describe('simpleDeepClone', () => {
  it('拷贝空对象', () => {
    const obj = {};
    const result = shallowClone(obj);
    expect(result).toEqual(obj);
  });

  it('拷贝单层级对象', () => {
    const obj = { name: 'dachui', age: 18 };
    const result = shallowClone(obj);
    expect(result).toEqual(obj);
  });

  it('拷贝含有特殊值单层级对象', () => {
    const obj = { name: undefined, age: null, sex: NaN };
    const result = shallowClone(obj);
    const validator = { age: null, sex: null };
    expect(result).toEqual(validator);
  });

  it('拷贝多层级对象', () => {
    const obj = { userInfo: { name: 'dachui', age: 18 } };
    const result = shallowClone(obj);
    expect(result).toEqual(obj);
  });

  it('拷贝含有特殊值的多层级对象', () => {
    const obj = { userInfo: { name: undefined, age: null, sex: NaN } };
    const result = shallowClone(obj);
    const validator = { userInfo: { age: null, sex: null } };
    expect(result).toEqual(validator);
  });
});
