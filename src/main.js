import './assets/base.css'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faLink, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
import { createApp } from 'vue'
import App from './App.vue'

library.add(faUserSecret, faDiscord, faLink, faGlobe, faGithub)
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
