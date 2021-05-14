import dictionary from './languages'
import './style.css'

const VueLang = {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    currentLanguage: '',
                    dictionary: dictionary
                }
            },
            mounted() {
                this.currentLanguage = (localStorage.getItem('locale')) ? localStorage.getItem('locale') : Object.keys(this.dictionary)[0];

            },
            methods: {
                changeLanguage(lang) {
                    console.log(lang)
                    this.currentLanguage = lang
                    localStorage.setItem('locale', lang)
                },
                getTranslate(text) {
                    let trans = text;
                    let currentObj = this.dictionary['' + this.currentLanguage + ''];
                    for (let str in currentObj) {
                        if (str === text) {
                            trans = currentObj[str];
                        }
                    }
                    return trans;

                }
            }

        });
    }
};

export default VueLang;
