import { jsonToUnderline } from '../../src/obj/jsonToUnderline';

describe('jsonToUnderline', () => {
  it('空对象', () => {
    const obj = {};
    jsonToUnderline(obj);
    const validator = {};
    expect(obj).toEqual(validator);
  });

  it('单层级对象属性名转下划线', () => {
    const obj = { userName: 'dachui', userAge: 18 };
    jsonToUnderline(obj);
    const validator = { user_name: 'dachui', user_age: 18 };
    expect(obj).toEqual(validator);
  });

  it('多层级对象属性名转下划线', () => {
    const obj = { userInfo: { userName: 'dachui', userAge: 18 } };
    jsonToUnderline(obj);
    const validator = { user_info: { user_name: 'dachui', user_age: 18 } };
    expect(obj).toEqual(validator);
  });
});
