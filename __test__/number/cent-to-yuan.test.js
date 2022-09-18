import { centToYuan } from '../../src/number/centToYuan';

describe('centToYuan', () => {
  it('centToYuan NaN', () => {
    const result = centToYuan(null);
    const validator = '0.00';
    expect(result).toEqual(validator);
  });

  it('centToYuan null', () => {
    const result = centToYuan(null);
    const validator = '0.00';
    expect(result).toEqual(validator);
  });

  it('centToYuan undefined', () => {
    const result = centToYuan(undefined);
    const validator = '0.00';
    expect(result).toEqual(validator);
  });

  it('centToYuan -1', () => {
    const result = centToYuan(0);
    const validator = '0.00';
    expect(result).toEqual(validator);
  });

  it('centToYuan 0', () => {
    const result = centToYuan(0);
    const validator = '0.00';
    expect(result).toEqual(validator);
  });

  it('centToYuan 0', () => {
    const result = centToYuan(0);
    const validator = '0.00';
    expect(result).toEqual(validator);
  });

  it('centToYuan 0.1', () => {
    const result = centToYuan(0.1);
    const validator = '0.00';
    expect(result).toEqual(validator);
  });

  it('centToYuan 1', () => {
    const result = centToYuan(1);
    const validator = '0.01';
    expect(result).toEqual(validator);
  });

  it('centToYuan 100', () => {
    const result = centToYuan(100);
    const validator = '1.00';
    expect(result).toEqual(validator);
  });

  it('centToYuan 1000', () => {
    const result = centToYuan(1000);
    const validator = '10.00';
    expect(result).toEqual(validator);
  });
});
