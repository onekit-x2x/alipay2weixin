/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior, 'wx://form-field-group'],
  options: {
    virtualHost: true
  },
  properties: {
    percent: {
      type: String,
      value: ''
    },
    showInfo: {
      type: Boolean,
      value: false
    },
    strokeWidth: {
      type: Number,
      value: 2
    },
    activeColor: {
      type: String,
      value: '#09BB07'
    },
    backgroundColor: {
      type: String,
      value: '#EBEBEB'
    },
    active: {
      type: Boolean,
      value: false

    }
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

  }
})
