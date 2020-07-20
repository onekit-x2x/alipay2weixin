import my from "../../../onekit/my"

Page({
  data: {},
  onSubmit(e) {
    my.alert({
      content: `数据：${JSON.stringify(e.detail.value)}`,
    });
  },
  onSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e)
  },

  onReset(e) {
    console.log('form发生了reset事件，携带数据为：',e)
  }
});
