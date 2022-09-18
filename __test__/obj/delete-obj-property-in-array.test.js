import { deleteObjPropertyInArray } from '../../src/obj/deleteObjPropertyInArray';

describe('deleteObjPropertyInArray', () => {
  it('删除数组中单一对象的name属性', () => {
    const array = [{ name: 'dachui', age: 18 }];
    deleteObjPropertyInArray(array, 'name');
    const validator = [{ age: 18 }];
    expect(array).toEqual(validator);
  });

  it('删除数组中多对象的name属性', () => {
    const array = [
      { name: 'dachui', age: 18 },
      { name: 'wangzhen', age: 18 },
    ];
    deleteObjPropertyInArray(array, 'name');
    const validator = [
      { age: 18 },
      { age: 18 },
    ];
    expect(array).toEqual(validator);
  });

  it('删除数组中对象不存在的属性属性', () => {
    const array = [{ name: 'dachui', age: 18 }];
    deleteObjPropertyInArray(array, 'sex');
    console.log('result', array);
    const validator = [{ name: 'dachui', age: 18 }];
    expect(array).toEqual(validator);
  });
});
