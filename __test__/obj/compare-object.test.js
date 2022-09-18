import { compareObject } from '../../src/obj/compareObject';

describe('compareObject 普通对象', () => {
  it('单层级对像相等的情况', () => {
    const result = compareObject(
      { name: 'dachui', age: 18 },
      { name: 'dachui', age: 18 },
    );
    expect(result).toBeTruthy();
  });

  it('单层级对象不相等的情况', () => {
    const result = compareObject(
      { name: 'dachui', age: 18 },
      { realName: 'wangzhen', realAge: 20 },
    );
    expect(result).toBeFalsy();
  });

  it('深层级对象相等的情况', () => {
    const result = compareObject(
      { user: { name: 'dachui', age: 18 } },
      { user: { name: 'dachui', age: 18 } },
    );
    expect(result).toBeTruthy();
  });

  it('深层级对象不相等的情况', () => {
    const result = compareObject(
      { user: { name: 'dachui', age: 18 } },
      { user: { realName: 'wangzhen', realAge: 20 } },
    );
    expect(result).toBeFalsy();
  });
});

describe('compareObject 数组&对象', () => {
  it('单层级对像相等的情况', () => {
    const result = compareObject(
      { name: 'dachui', age: 18, arr: ['dachui', 18] },
      { name: 'dachui', age: 18, arr: ['dachui', 18] },
    );
    expect(result).toBeTruthy();
  });

  it('单层级对象不相等的情况', () => {
    const result = compareObject(
      { name: 'dachui', age: 18, arr: ['dachui', 18] },
      { name: 'dachui', age: 18, realArr: ['wangzhen', 18] },
    );
    expect(result).toBeFalsy();
  });

  it('深层级对象相等的情况', () => {
    const result = compareObject(
      { user: { name: 'dachui', age: 18, arr: ['dachui', 18] } },
      { user: { name: 'dachui', age: 18, arr: ['dachui', 18] } },
    );
    expect(result).toBeTruthy();
  });

  it('深层级对象不相等的情况', () => {
    const result = compareObject(
      { user: { name: 'dachui', age: 18, arr: ['dachui', 18] } },
      { user: { name: 'wangzhen', age: 18, realArr: ['wangzhen', 18] } },
    );
    expect(result).toBeFalsy();
  });
});

describe('compareObject 特殊值', () => {
  it('两个空对象', () => {
    const result = compareObject({}, {});
    expect(result).toBeTruthy();
  });

  it('单层级对含有特殊值相等的情况', () => {
    const result = compareObject(
      { name: null, age: undefined },
      { name: null, age: undefined },
    );
    expect(result).toBeTruthy();
  });

  it('深层级对象含有特殊值相等的情况', () => {
    const result = compareObject(
      { user: { name: null, age: undefined } },
      { user: { name: null, age: undefined } },
    );
    expect(result).toBeTruthy();
  });
});
