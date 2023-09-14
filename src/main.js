import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import router from './router/router';
// import directives from './directives';

import VIntersection from '@/directives/VIntersection.js';
import VFocus from '@/directives/VFocus.js';
import store from './store';

const app = createApp(App)
const directives = [VIntersection, VFocus];

components.forEach(component => {
   app.component(component.name, component)
});
directives.forEach(directive => {
   console.log(directive)
   app.directive(directive.name, directive)
});

app
   .use(router)
   .use(store)
   .mount('#app')

