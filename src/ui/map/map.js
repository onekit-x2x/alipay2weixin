/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import alipay_behavior from '../../behavior/alipay_behavior'
import MapContext_behavior from '../../api/MapContext_behavior'

Component({
  behaviors: [onekit_behavior, alipay_behavior, MapContext_behavior],
  options: {
    virtualHost: true
  },
  data: {},
  properties: {
    latitude: {type: Number},
    longitude: {type: Number},
    scale: {type: Number, value: 16},
    skew: {type: Number, value: 0},
    rotate: {type: Number, value: 0},
    markers: {type: Array},
    polyline: {type: Array},
    circles: {type: Array},
    controls: {type: Array},
    polygon: {type: Array},
    showLocation: {type: Boolean},
    includePoints: {type: Array},
    //
    includePadding: {type: Object},
    groundOverlays: {type: Array},
    tileOverlay: {type: Object},
    customMapStyle: {type: String},
    panels: {type: Array},
    setting: {type: Object}
  },
  attached() {
    this.mapCtx = wx.createMapContext('onekit-map')
  },

  methods: {
    map_markertap() {
      this.triggerEvent('MarkerTap')
    },
    map_callouttap() {
      this.triggerEvent('CalloutTap')
    },
    map_controltap() {
      this.triggerEvent('ControlTap')
    },
    map_regionchange() {
      this.triggerEvent('RegionChange')
    },
    map_tap() {
      this.triggerEvent('Tap')
    },
    //
    _trigger_paneltap() {
      this.triggerEvent('PanelTap')
    }
  },
})
