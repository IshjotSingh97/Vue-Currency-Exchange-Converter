const API = `https://api.ratesapi.io/api/latest`
const myappcomponent = {
    data(){
        return {
            currencyvalue : 1,
            currencybase : null
        }
    },
    methods : {

    },
    mounted(){

    }
}

const myapp = Vue.createApp(myappcomponent).mount('#myapp')