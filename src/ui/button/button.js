/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior, 'wx://form-field-button'],
  options: {
    virtualHost: true
  },
  attached() {
  },
  detached() {},
  properties: {
    size: {
      type: String,
      value: 'default'
    },
    type: {
      type: String,
      value: 'default'
    },
    plain: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    hoverClass: {
      type: String,
      value: 'button-hover'
    },
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    formType: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: ''
    },
    scope: {
      type: String,
      value: ''
    },
    publicId: {
      type: String,
      value: ''
    },
  },
  methods: {
    button_tap(e) {
      if (this.properties.openType) {
        switch (this.properties.openType) {
          case 'share':
            break
          case 'getAuthorize':
            wx.getSetting({
              success: (res) => {
                if (!res.authSetting['scope.userInfo']) {
                  wx.authorize({
                    scope: this.properties.scope,
                    success() {
                      // wx.getUserInfo()
                      wx.getUserInfo({
                        success: (res) => {
                          console.log(res)
                        },
                      })
                    }
                  })
                }
              }
            })
            break
          case 'contactShare':
            break
          case 'lifestyle':
            break
          default:
            throw new Error(this.properties.openType)
        }
      }
      this.triggerEvent('Tap', e)
    },
  },
})
