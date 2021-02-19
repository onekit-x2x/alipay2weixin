/* eslint-disable camelcase */
/* eslint-disable prefer-rest-params */
export default class MapContext {
  constructor(weixinMapContext, id) {
    this.weixinMapContext = weixinMapContext
    this.id = id
  }

  calculateDistance(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.addCustomLayer(alipay_object)
  }

  changeMarkers(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.changeMarkers(alipay_object)
  }

  clearRoute(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.clearRoute(alipay_object)
  }

  gestureEnable(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.gestureEnable(alipay_object)
  }

  getCenterLocation(object) {
    return this.weixinMapContext.getCenterLocation(object)
  }

  getMapProperties(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.getMapProperties(alipay_object)
  }

  getRegion(object) {
    return this.weixinMapContext.getRegion(object)
  }

  getRotate(object) {
    return this.weixinMapContext.getRotate(object)
  }

  getScale(object) {
    return this.weixinMapContext.getScale(object)
  }

  getSkew(object) {
    return this.weixinMapContext.getSkew(object)
  }

  includePoints(object) {
    return this.weixinMapContext.includePoints(object)
  }

  mapToScreen(object) {
    return this.weixinMapContext.toScreenLocation(object)
  }

  moveToLocation(object) {
    return this.weixinMapContext.moveToLocation(object)
  }

  screenToMap(object) {
    return this.weixinMapContext.fromScreenLocation(object)
  }

  setCenterOffset(object) {
    return this.weixinMapContext.setCenterOffset(object)
  }

  setMapType(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.setMapType(alipay_object)
  }

  showRoute(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.showRoute(alipay_object)
  }

  showsCompass(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.showsCompass(alipay_object)
  }

  showsScale(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.showsScale(alipay_object)
  }

  smoothMoveMarker(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.smoothMoveMarker(alipay_object)
  }

  smoothMovePolyline(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.smoothMovePolyline(alipay_object)
  }

  translateMarker(object) {
    return this.weixinMapContext.translateMarker(object)
  }

  updateComponents(alipay_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.updateComponents(alipay_object)
  }
}
