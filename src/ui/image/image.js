/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    src: {
      type: String,
      value: '',
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
    defaultSource: {
      type: String
    }
  },
  attached() {
    if (this.properties.defaultSource) {
      this.setData({
        src: this.properties.defaultSource
      })
      setTimeout(() => {
        this.setData({
          src: this.properties.src
        })
      }, 2000)
    }
  },
  methods: {
    image_load(e) {
      this.triggerEvent('Load', e.detail)
    },
    image_error(e) {
      this.triggerEvent('Error', e.detail)
    },
  }
})
