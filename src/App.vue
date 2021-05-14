<template>
    <div id="app">

        <h1>Vue-lang simple plugin</h1>

        <h1>DEMO</h1>

        <div class="example">
            <!--
            Language-switchers...
            You can use the property "dictionary" and method "changeLanguage" in your component to create lang-switchers.
            For example:
            -->

            <div class="vue-lang-language-icons">
                <div class="vue-lang-language-icon"
                     v-for="(flag,index) in this.dictionary"
                     @click="changeLanguage(''+index+'')"
                     v-bind:key="index"
                     :title="index"
                     :style="{backgroundImage:'url('+flag.icon+')'}">
                </div>
            </div>


            <!--
            You can use the method "getTranslate('constant_from_languages.js_file') "
            For example:
            -->

            <h2 v-text="getTranslate('TEXTS')"></h2>

            <div v-text="getTranslate('LOREM')"></div>

            <!--
            You can use the property "currentLanguage" to determine the current locale
            For example:
            -->
            <div v-if="currentLanguage==='english'" class="vue-lang-test_block"> This block is shown only when English
                is
                selected
            </div>

            <!--
            ************************************
            -->

        </div>
        <h1>Usage</h1>
        <div class="usage">
            <ol>
                <li>
                    Copy directory <b>"src/plugins/vue-lang/"</b> into plugins directory in your project
                </li>
                <li>
                    Define your language constants in <b>"src/plugins/vue-lang/languages.js"</b>
                </li>
                <li>
                    Import and Use this <b>VueLang.js</b> in your <b>main.js</b>
                    <pre>
import VueLang from './plugins/vue-lang/VueLang';
Vue.use(VueLang)
                    </pre>
                </li>
                <li>
                    Now you can use properties and methods of this plugin in your components.
                    <h4>Language-switchers...</h4>
                    You can use the property "dictionary" and method "changeLanguage" in your component to create lang-switchers.
                    For example:


                    <pre><code>&lt;div class="vue-lang-language-icons">
    &lt;div class="vue-lang-language-icon"
        v-for="(flag,index) in this.dictionary"
        @click="changeLanguage(''+index+'')"
        v-bind:key="index"
        :title="index"
        :style="{backgroundImage:'url('+flag.icon+')'}">
    &lt;/div>
&lt;/div></code></pre>


                    <h4>Texts translating...</h4>
                    You can use the method "getTranslate('constant_from_languages.js_file') "
                    For example:


                    <pre><code>&lt;h2 v-text="getTranslate('TEXTS')">&lt;/h2>

&lt;div v-text="getTranslate('LOREM')">&lt;/div></code></pre>

                    <h4>Determination of current locale...</h4>
                    You can use the property "currentLanguage" to determine the current locale
                    For example:

                    <pre><code>&lt;div v-if="currentLanguage==='english'" class="vue-lang-test_block"> This block is shown only when English is selected &lt;/div></code></pre>


                </li>
                <li>
                    All styles you can change in <b>"src/plugins/vue-lang/style.css"</b>
                </li>
                <li>
                    Vue-code of this page you can see in App.vue
                </li>


            </ol>
            <h1>Good luck!</h1>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>
<style scoped>
    #app {
        width: 70%;
        margin: 0 auto;
    }

    .example {
        border: 2px solid #ddd;
        padding: 10px
    }
    ol{
        margin: 50px 0;
    }
    li{
        margin-bottom: 20px;
    }
</style>