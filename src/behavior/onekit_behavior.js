module.exports = Behavior({
  properties: {
    onekitId: {
      type: String, value: `id${new Date().getTime()}`
    },
    onekitStyle: {
      type: String, value: ''
    },
    onekitClass: {
      type: String, value: ''
    },
    created() {
      if (this.properties.onekitId) {
        getApp().onekit_nodes[`_${this.properties.onekitId}`] = this
      }
      //
      if (this.properties.onekitClass) {
        getApp().onekit_nodes[`__${this.properties.onekitClass}`] = this
      }
    },
  },
})
