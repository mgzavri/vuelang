# vue-lang

## Project setup and usage
```
Copy directory "src/plugins/vue-lang/" into plugins directory in your project

Define your language constants in "src/plugins/vue-lang/languages.js"

Import and Use this VueLang.js in your main.js

import VueLang from './plugins/vue-lang/VueLang';
Vue.use(VueLang)
                    
Now you can use properties and methods of this plugin in your components.

Language-switchers...

You can use the property "dictionary" and method "changeLanguage" in your component to create lang-switchers. 
For example:

<div class="vue-lang-language-icons">
    <div class="vue-lang-language-icon"
        v-for="(flag,index) in this.dictionary"
        @click="changeLanguage(''+index+'')"
        v-bind:key="index"
        :title="index"
        :style="{backgroundImage:'url('+flag.icon+')'}">
    </div>
</div>

Texts translating...

You can use the method "getTranslate('constant_from_languages.js_file') " 
For example:

<h2 v-text="getTranslate('TEXTS')"></h2>
<div v-text="getTranslate('LOREM')"></div>

Determination of current locale...

You can use the property "currentLanguage" to determine the current locale 
For example:

<div v-if="currentLanguage==='english'" class="vue-lang-test_block"> This block is shown only when English is selected </div>

All styles you can change in "src/plugins/vue-lang/style.css"

Vue-code of this page you can see in App.vue

Good luck!
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
