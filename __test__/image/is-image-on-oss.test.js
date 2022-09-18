import { isImageOnOss } from '../../src/image/isImageOnOss';

describe('isImageOnOss', () => {
  it('oss链接', () => {
    const result = isImageOnOss('https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg');
    expect(result).toBeTruthy();
  });

  it('oss链接', () => {
    const result = isImageOnOss('http://bb-s1.oss-cn-shanghai.aliyuncs.com/icon_download@2x.png');
    expect(result).toBeTruthy();
  });

  it('非oss链接', () => {
    const result = isImageOnOss('https://imgtu.com/i/6sDlTS');
    expect(result).toBeFalsy();
  });

  it('空链接', () => {
    const result = isImageOnOss('');
    expect(result).toBeFalsy();
  });
});
