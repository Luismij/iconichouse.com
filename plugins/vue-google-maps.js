import Vue from 'vue'
// import * as VueGoogleMaps from 'vue2-google-maps'
// import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
import * as GmapVue from '~/node_modules/gmap-vue'

// Vue.use(VueGoogleMaps, {
Vue.use(GmapVue, {
  load: {
    // key: process.env.GMAP_KEY || 'AIzaSyCUAeyQBQMIFAh63qNIDwH2DaDjRAeLLQI',
    // key: process.env.GMAP_KEY || 'AIzaSyBWheGkO2ZkRmiqJQlhWa0asXhxyA2xyN8',
    key: 'AIzaSyBWheGkO2ZkRmiqJQlhWa0asXhxyA2xyN8',
    // libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':

  installComponents: false
})

Vue.component('google-map', GmapVue.Map);
Vue.component('google-kml-layer', GmapVue.KmlLayer);
