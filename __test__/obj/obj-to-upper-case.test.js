import { objToUpperCase } from '../../src/obj/objToUpperCase';

describe('objToUpperCase', () => {
  it('空对象', () => {
    const result = objToUpperCase({});
    const validator = {};
    expect(result).toEqual(validator);
  });

  it('单层级对象', () => {
    const result = objToUpperCase({ user_name: 'dachui', user_age: 18 });
    const validator = { userName: 'dachui', userAge: 18 };
    expect(result).toEqual(validator);
  });

  it('多层级对象', () => {
    const result = objToUpperCase({
      user_info: { user_name: 'dachui', user_age: 18 },
      user_address: { user_province: 'zhejiang', user_city: 'hangzhou' },
    });
    const validator = {
      userInfo: { userName: 'dachui', userAge: 18 },
      userAddress: { userProvince: 'zhejiang', userCity: 'hangzhou' },
    };
    expect(result).toEqual(validator);
  });

  it('深层级对象', () => {
    const result = objToUpperCase({
      user_info: {
        user_name: 'dachui',
        user_age: 18,
        user_address: {
          user_province: 'zhejiang',
          user_city: 'hangzhou',
        },
      },
    });
    const validator = {
      userInfo: {
        userName: 'dachui',
        userAge: 18,
        userAddress: {
          userProvince: 'zhejiang',
          userCity: 'hangzhou',
        },
      },
    };
    expect(result).toEqual(validator);
  });
});
