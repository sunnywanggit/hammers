// TODO 单元测试
/**
 * @description 获取本地图片base64码
 * @param { Blob } file
 * @return { Promise<string> }
 */
export const getLocalImageBase64 = (file: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    resolve(reader.result);
  };
  reader.onerror = reject;
  reader.readAsDataURL(file);
});
