import { yuanToCent } from '../../src/number/yuanToCent';

describe('yuanToCent', () => {
  it('yuanToCent NaN', () => {
    const result = yuanToCent(NaN);
    const validator = 0;
    expect(result).toBe(validator);
  });

  it('yuanToCent null', () => {
    const result = yuanToCent(undefined);
    const validator = 0;
    expect(result).toBe(validator);
  });

  it('yuanToCent undefined', () => {
    const result = yuanToCent(undefined);
    const validator = 0;
    expect(result).toBe(validator);
  });

  it('yuanToCent -1', () => {
    const result = yuanToCent(-1);
    const validator = 0;
    expect(result).toBe(validator);
  });

  it('yuanToCent 0.01', () => {
    const result = yuanToCent(0.01);
    const validator = 1;
    expect(result).toBe(validator);
  });

  it('yuanToCent 0.1', () => {
    const result = yuanToCent(0.1);
    const validator = 10;
    expect(result).toBe(validator);
  });

  it('yuanToCent 0', () => {
    const result = yuanToCent(0);
    const validator = 0;
    expect(result).toBe(validator);
  });

  it('yuanToCent 1', () => {
    const result = yuanToCent(1);
    const validator = 100;
    expect(result).toBe(validator);
  });

  it('yuanToCent 10', () => {
    const result = yuanToCent(10);
    const validator = 1000;
    expect(result).toBe(validator);
  });
});
