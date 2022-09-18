/**
 * @description 图片是否存储在oss上&&图片链接是否是我们的内部链接
 * @param { string } url
 * @return { boolean } 链接是否存在于oss上
 */
export const isImageOnOss = (url: string) => /^https?:\/\/[0-9a-z_-]+\.(billionbottle|xiajiucai|oss-[0-9a-z_-]+\.aliyuncs).com\/.*\.(png|jpe?g|gif|webp)/i.test(url);
