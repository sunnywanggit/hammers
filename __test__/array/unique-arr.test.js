import { uniqueArr } from '../../src/array/uniqueArr';

describe('uniqueArr', () => {
  it('空数组去重', () => {
    const arrary = [];
    const result = uniqueArr(arrary);
    const validator = [];
    expect(JSON.stringify(result)).toBe(JSON.stringify(validator));
  });

  it('无重复内容数组去重', () => {
    const arrary = [1, 2, 3];
    const result = uniqueArr(arrary);
    const validator = [1, 2, 3];
    expect(JSON.stringify(result)).toBe(JSON.stringify(validator));
  });

  it('普通数组去重', () => {
    const arrary = [1, 1, 2, 2, 3, 3];
    const result = uniqueArr(arrary);
    const validator = [1, 2, 3];
    expect(JSON.stringify(result)).toBe(JSON.stringify(validator));
  });

  it('含有特殊值数组去重', () => {
    const arrary = [1, 2, 3, undefined, undefined, '', '', null, null, NaN, NaN];
    const result = uniqueArr(arrary);
    const validator = [1, 2, 3, undefined, '', null, NaN];
    expect(JSON.stringify(result)).toBe(JSON.stringify(validator));
  });
});
