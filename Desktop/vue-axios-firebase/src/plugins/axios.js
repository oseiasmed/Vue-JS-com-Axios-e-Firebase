import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://bd-vue.firebaseio.com/',
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promisse.reject(error))
    }
})