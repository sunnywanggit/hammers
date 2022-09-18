// TODO 单元测试

/**
 * @description 浮点型输入限制
 * @param { KeyboardEvent } e 事件对象
 */

export const limitFloat = (e: KeyboardEvent) => {
  const floatLimitKey = [
    48, // 0
    49, // 1
    50, // 2
    51, // 3
    52, // 4
    53, // 5
    54, // 6
    55, // 7
    56, // 8
    57, // 9
    144, // number lock
    96, // 0
    97, // 1
    98, // 2
    99, // 3
    100, // 4
    101, // 5
    102, // 6
    103, // 7
    104, // 8
    105, // 9
    37, // left
    39, // right
    8, // backspace
    46, // delete
    13, // enter
    9, // tab
    20, // caps lock
    16, // shift
    18, // alt
    17, // ctrl
    190, // .
    110, // 小键盘的.
  ];
  if (!floatLimitKey.includes(e.keyCode)) {
    // 检测是否是复制粘贴操作
    if (e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
  }
};
