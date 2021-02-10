/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior, 'wx://form-field-group'],
  options: {
    virtualHost: true
  },
  properties: {
    name: {type: String, value: ''},
    min: {type: String, value: 0},
    max: {type: Number, value: 100},
    step: {type: Number, value: 1},
    disabled: {type: Boolean, value: false},
    value: {type: Number, value: 0},
    showValue: {type: Boolean, value: false},
    activeColor: {type: String, value: '#108ee9'},
    backgroundColor: {type: String, value: '#ddd'},
    //
    trackSize: {type: Number, value: 4},
    handleSize: {type: Number, value: 22},
    handleColor: {type: String, value: '#fff'},
  },
  methods: {
    slider_change(e) {
      this.triggerEvent('Change', e)
    },
    slider_changing(e) {
      this.triggerEvent('Changing', e)
    }
  }
})
