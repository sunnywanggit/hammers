/**
 * @description 获取微信重定向链接
 * @param { string } url 微信重定向目标链接
 * @param { string } wechatAppId 微信公众号 appid
 * @param { boolean } isSilent 是否静默重定向，静默形式只能获取openid，用户授权（非静默）可以获取unionId
 * @return { string } 重定向之后的链接
 */
export const getWechatRedirectURL = (url: string, wechatAppId: string, isSilent: boolean) => `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
  wechatAppId
}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=${
  isSilent ? 'snsapi_base' : 'snsapi_userinfo'
}&state=baiping#wechat_redirect`;
