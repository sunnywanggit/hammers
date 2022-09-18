import { removeEmptyField } from '../../src/obj/removeEmptyField';

describe('removeEmptyField', () => {
  it('空对象', () => {
    const result = removeEmptyField({});
    const validator = {};
    expect(result).toEqual(validator);
  });

  it('含有特殊值的单层级对象', () => {
    const result = removeEmptyField({ name: '', age: null, sex: undefined });
    const validator = {};
    expect(result).toEqual(validator);
  });

  it('含有特殊值的多层级对象', () => {
    const result = removeEmptyField({ userInfo: { name: '', age: null, sex: undefined } });
    const validator = { userInfo: {} };
    expect(result).toEqual(validator);
  });
});
