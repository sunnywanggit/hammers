import { deepSet } from '../../src/obj/deepSet';

describe('deepSet ', () => {
  it('obj 为 undefined', () => {
    const obj = undefined;
    deepSet(obj, 'a.b', 'bbb');
    expect(obj).toEqual(undefined);
  });

  it('obj 为 null', () => {
    const obj = null;
    deepSet(obj, 'a.b', 'bbb');
    expect(obj).toEqual(null);
  });

  it('值为基本类型', () => {
    const obj = {};
    deepSet(obj, 'a.b', 'bbb');
    expect(obj).toEqual({ a: { b: 'bbb' } });
  });

  it('值为对象', () => {
    const obj = { a: { b: 'bbb' } };
    deepSet(obj, 'a.b', { c: 'ccc' });
    expect(obj).toEqual({ a: { b: { c: 'ccc' } } });
  });

  it('值为数组', () => {
    const obj = { a: { b: 'bbb' } };
    deepSet(obj, 'a.b', [0, 1, 2]);
    expect(obj).toEqual({ a: { b: [0, 1, 2] } });
  });

  it('自动创建数组', () => {
    const obj = {};
    deepSet(obj, 'a.1', '111');
    expect(obj).toEqual({ a: [undefined, '111'] });
  });

  it('为数组中的对象赋值', () => {
    const obj = { a: { b: [{ c: 'ccc' }] } };
    deepSet(obj, 'a.b[0].c', 'ddd');
    expect(obj).toEqual({ a: { b: [{ c: 'ddd' }] } });
  });

  it('为数组中的对象赋值', () => {
    const obj = { a: { b: [{ c: 'ccc' }] } };
    deepSet(obj, 'a.b.0.c', 'ddd');
    expect(obj).toEqual({ a: { b: [{ c: 'ddd' }] } });
  });

  it('值为undefined', () => {
    const obj = { a: { b: 'bbb' } };
    deepSet(obj, 'a.b');
    expect(obj).toEqual({ a: { b: undefined } });
  });
});
