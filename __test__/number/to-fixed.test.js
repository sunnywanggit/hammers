import { toFixed } from '../../src/number/toFixed';

describe('toFixed', () => {
  const positiveNumber = 12345.6789;
  const negativeNumber = -12345.6789;
  it('toFixed 入参为NaN', () => {
    const result = toFixed(NaN);
    const validator = 0;
    expect(result).toBe(validator);
  });

  it('toFixed 入参为null', () => {
    const result = toFixed(null);
    const validator = 0;
    expect(result).toBe(validator);
  });

  it('toFixed 入参为undefined', () => {
    const result = toFixed(undefined);
    const validator = 0;
    expect(result).toBe(validator);
  });

  it('toFixed 入参为空字符串', () => {
    const result = toFixed('');
    const validator = 0;
    expect(result).toBe(validator);
  });

  it('toFixed 负值不保留小数位数', () => {
    const result = toFixed(negativeNumber, 0);
    const validator = -12346;
    expect(result).toBe(validator);
  });

  it('toFixed 负值保留一位小数', () => {
    const result = toFixed(negativeNumber, 1);
    const validator = -12345.7;
    expect(result).toBe(validator);
  });

  it('toFixed 负值保留两位小数', () => {
    const result = toFixed(negativeNumber);
    const validator = -12345.68;
    expect(result).toBe(validator);
  });

  it('toFixed 负值保留三位小数', () => {
    const result = toFixed(negativeNumber, 3);
    const validator = -12345.679;
    expect(result).toBe(validator);
  });

  it('toFixed 正值不保留小数位数', () => {
    const result = toFixed(positiveNumber, 0);
    const validator = 12346;
    expect(result).toBe(validator);
  });

  it('toFixed 正值保留一位小数', () => {
    const result = toFixed(positiveNumber, 1);
    const validator = 12345.7;
    expect(result).toBe(validator);
  });

  it('toFixed 保留两位小数', () => {
    const result = toFixed(positiveNumber);
    const validator = 12345.68;
    expect(result).toBe(validator);
  });

  it('toFixed 保留三位小数', () => {
    const result = toFixed(positiveNumber, 3);
    const validator = 12345.679;
    expect(result).toBe(validator);
  });
});
