/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior, 'wx://form-field'],
  options: {
    virtualHost: true
  },
  data: {
    num: 0
  },
  properties: {
    name: {type: String},
    value: {type: String},
    placeholder: {type: String, value: ''},
    placeholderStyle: {type: String, value: ''},
    placeholderClass: {type: String, value: ''},
    disabled: {type: Boolean, value: false},
    maxlength: {type: Number, value: 140},
    focus: {type: Boolean, value: false},
    autoHeight: {type: Boolean, value: false},
    showCount: {type: Boolean, value: true},
    controlled: {type: Boolean, value: false}
  },
  didMount() {
  },
  methods: {
    textarea_focus(e) {
      this.triggerEvent('Focus', e.detail)
    },
    textarea_blur(e) {
      this.triggerEvent('Blur', e.detail)
    },
    textarea_input(e) {
      this.data.num = e.detail.value.length
      this.setData({num: this.data.num, value: e.detail.value})
      this.triggerEvent('Input', e.detail)
    },
    textarea_confirm(e) {
      this.triggerEvent('Confirm', e.detail)
    },
  }
})
