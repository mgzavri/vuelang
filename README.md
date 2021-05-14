# Vue-lang plugin

This is simple but useful plugin for multilanguage vue application

## Demo

https://mgzavri.github.io/vuelang/

### Plugin setup and usage
```
1. Copy directory "src/plugins/vue-lang/" into plugins directory in your project

2. Define your language constants and pathes to language icons in "src/plugins/vue-lang/languages.js"

3. Import and Use this VueLang.js in your main.js

import VueLang from './plugins/vue-lang/VueLang';
Vue.use(VueLang)
                    
4. Now you can use properties and methods of this plugin in your components.

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

5. All styles you can change in "src/plugins/vue-lang/style.css"

6. Vue-code of this page you can see in App.vue

Good luck!
```


#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
