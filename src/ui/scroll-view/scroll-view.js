/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior, 'wx://form-field-group'],
  options: {
    virtualHost: true
  },
  data: {
    animationDuration: 0
  },
  properties: {
    scrollX: {
      type: Boolean,
      value: false,
    },
    scrollY: {
      type: Boolean,
      value: false
    },
    upperThreshold: {
      type: Number,
      value: 50
    },
    lowerThreshold: {
      type: Number,
      value: 50
    },
    scrollTop: {
      type: Number,
      value: 0
    },
    scrollLeft: {
      type: Number,
      value: 0
    },
    scrollIntoView: {
      type: String,
      value: ''
    },
    scrollWithAnimation: {
      type: Boolean,
      value: false
    },
    scrollAnimationDuration: {
      type: Number,
      value: 0
    },
    EnableBackToTop: {
      type: Boolean,
      value: false
    },
    //
    trapScroll: {
      type: Boolean,
      value: false
    },
  },
  attached() {
    if (this.properties.scrollWithAnimation) {
      this.data.animationDuration = Math.round(this.properties.scrollAnimationDuration / 1000)
    }
    //
    if (this.properties.scrollY) {
      if (this.properties.upperThreshold === 0 && this.properties.lowerThreshold) {
        this.data.scrollY = false
      }
    }
    this.setData(this.data)
  },
  methods: {
    scrollView_scrolltoupper() {
      this.triggerEvent('scrolltoupper', {})
    },
    scrollView_scrolltolower() {
      this.triggerEvent('scrolltolower', {})
    },
    scrollView_scroll(e) {
      this.triggerEvent('scroll', e.detail)
    }
  }
})
