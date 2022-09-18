import { deepGet } from '../../src/obj/deepGet';

describe('deepGet ', () => {
  it('undefined', () => {
    const obj = undefined;
    const validator = deepGet(obj, 'a.b.c');
    expect(validator).toEqual(undefined);
  });

  it('null', () => {
    const obj = null;
    const validator = deepGet(obj, 'a.b.c');
    expect(validator).toEqual(undefined);
  });

  it('空对象', () => {
    const obj = {};
    const validator = deepGet(obj, 'a.b.c');
    expect(validator).toEqual(undefined);
  });

  it('普通值', () => {
    const obj = { a: { b: { c: 'ccc' } } };
    const validator = deepGet(obj, 'a.b.c');
    expect(validator === 'ccc');
  });

  it('对象', () => {
    const obj = { a: { b: { c: { d: 'ddd' } } } };
    const validator = deepGet(obj, 'a.b.c');
    expect(validator).toEqual({ d: 'ddd' });
  });

  it('数组中的值', () => {
    const obj = { a: { b: { c: [0] } } };
    const validator = deepGet(obj, 'a.b.c[0]');
    expect(validator === 0);
  });

  it('数组中的值', () => {
    const obj = { a: { b: { c: [0] } } };
    const validator = deepGet(obj, 'a.b.c.0');
    expect(validator === 0);
  });

  it('从数组中获取值', () => {
    const obj = [0, 1, 2];
    const validator = deepGet(obj, '1');
    expect(validator === 1);
  });
});
