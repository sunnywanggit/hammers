import { convertToEmpty } from '../../src/obj/convertToEmpty';

describe('convertToEmpty', () => {
  it('空对象测试', () => {
    const obj = {};
    convertToEmpty(obj);
    const validator = {};
    expect(obj).toEqual(validator);
  });

  it('单层级对象属性值置空', () => {
    const obj = { name: 'dachui', age: 18 };
    convertToEmpty(obj);
    const validator = { name: '', age: '' };
    expect(obj).toEqual(validator);
  });

  it('含有特殊值的单层级对象属性值置空', () => {
    const obj = { name: undefined, age: null };
    convertToEmpty(obj);
    const validator = { name: '', age: '' };
    expect(obj).toEqual(validator);
  });
});
