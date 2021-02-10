/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior, 'wx://form-field-group'],
  options: {
    virtualHost: true
  },
  data: {
    Lines: null
  },
  properties: {
    selectable: {
      type: Boolean,
      value: false
    },
    space: {
      type: String,
      value: ''
    },
    decode: {
      type: Boolean,
      value: false
    },
    numberOfLines: {
      type: Number,
      value: null
    }
  },
  attached() {
    if (this.properties.numberOfLines >= 1) {
      this.data.Lines = this.properties.numberOfLines
    }
    this.setData(this.data)
  }
})
