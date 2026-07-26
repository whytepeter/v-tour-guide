import { createApp } from 'vue'
import Demo from './Demo.vue'
import './tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCheck,
  faChartSimple,
  faBolt,
  faHand,
  faGear,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Only the icons the demo actually uses, so the bundle stays tiny.
library.add(
  faCheck,
  faChartSimple,
  faBolt,
  faHand,
  faGear,
  faStar,
  faCompass,
  faGithub,
)

createApp(Demo).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
