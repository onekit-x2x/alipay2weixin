/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior, 'wx://form-field-group'],
  options: {
    virtualHost: true
  },
  properties: {
    value: {type: Array},
    indicatorStyle: {type: String},
    indicatorClass: {type: String},
    maskStyle: {type: String},
    maskClass: {type: String},
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    pickerView_change() {
      this.triggerEvent('Change', {})
    }
  }
})
