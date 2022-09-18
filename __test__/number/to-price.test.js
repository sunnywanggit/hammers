import { toPrice } from '../../src/number/toPrice';

describe('toPrice 入参为数字', () => {
  it('数字0,单位为分', () => {
    const result = toPrice(0);
    const validator = '￥0.00';
    expect(result).toEqual(validator);
  });

  it('数字1,单位为分', () => {
    const result = toPrice(1);
    const validator = '￥0.01';
    expect(result).toEqual(validator);
  });

  it('数字100,单位为分', () => {
    const result = toPrice(100);
    const validator = '￥1.00';
    expect(result).toEqual(validator);
  });

  it('数字0,单位为元', () => {
    const result = toPrice(0, false);
    const validator = '￥0.00';
    expect(result).toEqual(validator);
  });

  it('数字1,单位为元', () => {
    const result = toPrice(1, false);
    const validator = '￥1.00';
    expect(result).toEqual(validator);
  });

  it('数字100,单位为元', () => {
    const result = toPrice(100, false);
    const validator = '￥100.00';
    expect(result).toEqual(validator);
  });
});

describe('toPrice 入参为字符串', () => {
  it('字符串0,单位为分', () => {
    const result = toPrice('0');
    const validator = '￥0.00';
    expect(result).toEqual(validator);
  });

  it('字符串1,单位为分', () => {
    const result = toPrice(1);
    const validator = '￥0.01';
    expect(result).toEqual(validator);
  });

  it('字符串100,单位为分', () => {
    const result = toPrice(100);
    const validator = '￥1.00';
    expect(result).toEqual(validator);
  });

  it('字符串0,单位为元', () => {
    const result = toPrice('0', false);
    const validator = '￥0.00';
    expect(result).toEqual(validator);
  });

  it('字符串1,单位为元', () => {
    const result = toPrice(1, false);
    const validator = '￥1.00';
    expect(result).toEqual(validator);
  });

  it('字符串100,单位为元', () => {
    const result = toPrice(100, false);
    const validator = '￥100.00';
    expect(result).toEqual(validator);
  });
});

describe('toPrice 入参为特殊值', () => {
  it('入参为空值', () => {
    const result = toPrice('');
    const validator = '';
    expect(result).toEqual(validator);
  });

  it('入参为 undefined', () => {
    const result = toPrice(undefined);
    const validator = '';
    expect(result).toEqual(validator);
  });

  it('入参为 null', () => {
    const result = toPrice(undefined);
    const validator = '';
    expect(result).toEqual(validator);
  });

  it('入参为 NaN', () => {
    const result = toPrice(undefined);
    const validator = '';
    expect(result).toEqual(validator);
  });
});
