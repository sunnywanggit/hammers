/**
 * @description 二分法查找数组中的元素
 * @param { Array } arr 原数组
 * @param { string } target 查找的元素
 * 说明：返回 —1 说明要查找的元素不在数组中
 */
export const binarySearch = (arr:Array<any>, target:any) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) { // 说明继续查找
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } if (arr[mid] > target) {
      right = mid - 1;// 需要向左边查找
    } else {
      left = mid + 1;// 需要向右边查找
    }
  }
  return -1;
};
