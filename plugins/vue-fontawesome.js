import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp, faChevronDown, faChevronRight, faTimes, faSpinner, faShareAlt, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faFacebookF, faTwitter, faWhatsapp, faInstagram, faSnapchatGhost, faPinterestP } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin.
// See other examples for how you
// can add other styles or just individual icons.
library.add(
  faChevronUp,
  faChevronDown,
  faChevronRight,
  faTimes,
  faSpinner,
  faShareAlt,
  faLongArrowAltDown,
  faFacebookF,
  faTwitter,
  faWhatsapp,
  faInstagram,
  faSnapchatGhost,
  faPinterestP
)

// Register the component globally
Vue.component('v-icon', FontAwesomeIcon)
