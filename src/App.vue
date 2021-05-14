<template>
    <div id="app">

        <!--
        Language-switchers...
        You can use the property "dictionary" in your component to create lang-switchers.
        For example:
        -->

        <div class="vue-lang-language-icons">
            <div class="vue-lang-language-icon"
                 v-for="(flag,index) in this.dictionary"
                 @click="changeLanguage(''+index+'')"
                 v-bind:key="index"
                 :style="{backgroundImage:'url('+flag.icon+')'}">
            </div>
        </div>


        <!--
        You can use the method "getTranslate('constant_from_languages.js_file') "
        For example:
        -->

        <h1 v-text="getTranslate('TEXTS')"></h1>

        <div v-text="getTranslate('LOREM')"></div>

        <!--
        You can use the property "currentLanguage" to determine the current locale
        For example:
        -->
        <div v-if="currentLanguage==='english'" class="vue-lang-test_block"> This block is shown only when English is
            selected
        </div>

        <!--
        ************************************
        -->

    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>