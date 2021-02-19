/* eslint-disable camelcase */
import {PROMISE} from 'oneutil'

module.exports = {
  methods: {
    // calculateDistance(ali_object) {}
    changeMarkers(ali_object) {
      if (!ali_object) {
        return
      }
      const ali_add = ali_object.add
      const ali_remove = ali_object.remove
      const ali_updata = ali_object.updata
      const ali_success = ali_object.success
      const ali_fail = ali_object.fail
      const ali_complete = ali_object.complete
      ali_object = null
      PROMISE((SUCCESS) => {
        this.mapCtx.addMarkers({
          markers: ali_add || ali_updata
        })
        this.mapCtx.removeMarkers({
          markerIds: ali_remove
        })
        SUCCESS()
      }, ali_success, ali_fail, ali_complete)
    },

    // clearRoute(ali_object) {
    //   if (!ali_object) {
    //     return
    //   }
    //   const ali_add = ali_object.add
    //   const ali_remove = ali_object.remove
    //   const ali_updata = ali_object.updata
    //   const ali_success = ali_object.success
    //   const ali_fail = ali_object.fail
    //   const ali_complete = ali_object.complete
    //   ali_object = null
    // }
  }
}
