import { toThousand } from '../../src/number/toThousand';

describe('toThousand', () => {
  it('toThousand-0', () => {
    const validator = toThousand(0);
    const result = '0';
    expect(validator).toEqual(result);
  });

  it('toThousand-1', () => {
    const validator = toThousand(1);
    const result = '1';
    expect(validator).toEqual(result);
  });

  it('toThousand-100', () => {
    const validator = toThousand(100);
    const result = '100';
    expect(validator).toEqual(result);
  });

  it('toThousand-1000', () => {
    const validator = toThousand(1000);
    const result = '1,000';
    expect(validator).toEqual(result);
  });

  it('toThousand-10000', () => {
    const validator = toThousand(10000);
    const result = '10,000';
    expect(validator).toEqual(result);
  });

  it('toThousand-100000', () => {
    const validator = toThousand(100000);
    const result = '100,000';
    expect(validator).toEqual(result);
  });
});
