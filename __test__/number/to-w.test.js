import { toW } from '../../src/number/toW';

describe('toW', () => {
  it('toW-1', () => {
    const validator = toW(1);
    expect(validator).toBe(1);
  });

  it('toW-10', () => {
    const validator = toW(10);
    expect(validator).toBe(10);
  });

  it('toW-100', () => {
    const validator = toW(100);
    expect(validator).toBe(100);
  });

  it('toW-1000', () => {
    const validator = toW(1000);
    expect(validator).toBe(1000);
  });

  it('toW-10000', () => {
    const validator = toW(10000);
    expect(validator).toBe('1.0w');
  });

  it('toW-100000', () => {
    const validator = toW(100000);
    expect(validator).toBe('10.0w');
  });
});
