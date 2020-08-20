import my from "../../../onekit/my"
Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    objectArray: [
      {
        'onekit-Id': 0,
        name: '美国',
      },
      {
        'onekit-Id': 1,
        name: '中国',
      },
      {
        'onekit-Id': 2,
        name: '巴西',
      },
      {
        'onekit-Id': 3,
        name: '日本',
      },
    ],
    arrIndex: 0,
    index: 0
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
});

