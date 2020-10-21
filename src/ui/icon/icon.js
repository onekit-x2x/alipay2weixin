/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior, 'wx://form-field-group'],
  options: {
    virtualHost: true
  },
  mixins: [],
  data: {},
  props: {
    onekitId: {type: String, value: ''},
  },
  didMount() {},
  didUpdate() {
  },
  didUnmount() {},
  methods: {},

})
