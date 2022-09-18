import { getWechatRedirectURL } from '../../src/url/getWechatRedirectURL';

describe('getWechatRedirectURL', () => {
  it('不静默重定向', () => {
    const result = getWechatRedirectURL('https://web.billionbottle.com/alcohol-benefactor', '112233445566', false);
    const validator = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=112233445566&redirect_uri=https%3A%2F%2Fweb.billionbottle.com%2Falcohol-benefactor&response_type=code&scope=snsapi_userinfo&state=baiping#wechat_redirect';
    expect(result).toBe(validator);
  });

  it('静默重定向', () => {
    const result = getWechatRedirectURL('https://web.billionbottle.com/alcohol-benefactor', '112233445566', true);
    console.log('resu', result);
    const validator = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=112233445566&redirect_uri=https%3A%2F%2Fweb.billionbottle.com%2Falcohol-benefactor&response_type=code&scope=snsapi_base&state=baiping#wechat_redirect';
    expect(result).toBe(validator);
  });
});
