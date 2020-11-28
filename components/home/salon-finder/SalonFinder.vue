<template>
  <div class="salon-finder">

    <b-container>

      <div class="salon-box">

        <img src="~/static/images/m-icon.svg" alt="">


        <h2 class="text-white text-uppercase">
         Visítanos
        </h2>

        <h4 class="text-white" v-html="$md.render(direccion)">
        </h4>
      </div>

    </b-container>


    <client-only>
     
    <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18866.175172518204!2d-75.5766978047696!3d6.247284948942805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Medellin%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1606319994997!5m2!1sen!2sco"
     width="100vw"
      height="450"
       frameborder="0"
        style="border:0;width:100% ; height:100%;"
         allowfullscreen=""
          aria-hidden="false"
           tabindex="0"
           ></iframe>

<!-- 
      <google-map
        ref="mapRef"
        :center="center"
        :zoom="zoomMap"
        :options="gmapOptions"
        disableDefaultUI: true
        map-type-id="roadmap"
        class="map"
      >

  

        <google-kml-layer :url="urlKmlayer" :zoom="13" :clickable="true" @click="toggleInfoWindow" :suppress-info-windows="true">
        </google-kml-layer>

      </google-map> -->

    </client-only>
  </div>
</template>

<script>
// https://stackoverflow.com/questions/32484814/importing-mymaps-data-in-google-maps
// <iframe src="https://www.google.com/maps/d/u/5/embed?mid=1_e8dWcmhAjBgsP_jhLEcUsxrB7Ffxfme" width="640" height="480"></iframe>
// www.google.com/maps/d/kml?forcekml=1&mid=1_e8dWcmhAjBgsP_jhLEcUsxrB7Ffxfme
// https://github.com/xkjyeah/vue-google-maps
// https://es.vuejs.org/v2/cookbook/practical-use-of-scoped-slots.html

// import { gmapApi } from 'gmap-vue'
import mapStyles from './MapStyle'

export default {
  name: 'SalonFinder',
  data() {
    return {
      urlKmlayer: 'https://www.google.com/maps/d/kml?mid=1_e8dWcmhAjBgsP_jhLEcUsxrB7Ffxfme',
      center: { lat: 18.255106587585377, lng: -66.48016325000003 },
      zoomMap: 12,
      gmapOptions: {
        suppressInfoWindows: true,
        disableDefaultUI: true,
        fullscreenControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        streetViewControl: false,
        styles: mapStyles
      },
      infoContent: '',
      infoWindowPos: null,
      infoOptions: null,
      infoWinOpen: false,
      currentMidx: null,
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.$refs.mapRef.$mapPromise.then((map) => {
    //     this.center = { lat: 18.453866, lng: -66.0818769 }
    //     map.panTo(this.center)
    //     this.zoomMap = 13
    //   })
    // }, 1000);
  },
  props:['direccion'],
  methods: {
    // toggleInfoWindow({featureData, latLng, pixelOffset}) {
    toggleInfoWindow(infoSalon) {
      const {featureData, latLng, pixelOffset} = infoSalon
      this.infoWindowPos = latLng

      // if (this.currentMidx == featureData.id) {
      //   this.infoWinOpen = !this.infoWinOpen;
      // } else {
      //   this.infoWinOpen = true;
      //   this.currentMidx = featureData.id;
      //   this.infoContent = featureData.name
      //   this.infoOptions = { pixelOffset }
      // }
      // this.showInContentWindow(featureData.name)
      this.$nextTick(() => {
          this.showInContentWindow(infoSalon)
        }, 25);
    },
    showInContentWindow({featureData, latLng}) {
      const windowElement = document.getElementsByClassName('gm-style-iw-d');
      const btnOpenInGMap = document.createElement('a');
      btnOpenInGMap.textContent = 'ver en google maps';
      btnOpenInGMap.text = 'ver en google maps';
      btnOpenInGMap.setAttribute('href', `https://maps.google.com/?q=${latLng.lat()},${latLng.lng()}&z=8`);
      // btnOpenInGMap.setAttribute('href', `https://www.google.com/maps/place/${latLng.lat()},${latLng.lng()},13z`);
      // btnOpenInGMap.setAttribute('href', `https://www.google.com/maps/place/${featureData.name}/@${latLng.lat()},${latLng.lng()}`);
      btnOpenInGMap.setAttribute('target', 'blank');
      windowElement[0].appendChild(btnOpenInGMap);

      this.$gtm.push({
        event: 'Cerca de Ti',
        label: `Salon: ${featureData.name}`
      })
      
    }
  },
  computed: {
    // google: gmapApi,
    textsData() {
      return this.$store.state.siteConfigData.content_repeat.find( element => element.content_type == 'find a salon')
    }
  }
}
</script>

<style lang="scss" src="./SalonFinder.scss" />
