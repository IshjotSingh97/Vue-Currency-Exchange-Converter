const myappcomponent = {
    data(){
        return {
            currencyvalue : 1,
            currencyfrom : null,
            currencyto : null,
            currencies : null,
            result : null
        }
    },
    methods : {
        async getExchangeRates(){
            let query = `https://api.exchangeratesapi.io/latest?base=${this.currencyfrom}`
            await axios.get(query)
            .then((response)=>{
                this.currencyto= response.data.rates
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        async getCurriencies(){
            await axios.get(`https://api.frankfurter.app/currencies`)
            .then((response)=>{
                this.currencies = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    mounted(){
        this.getCurriencies()
    }
}

const myapp = Vue.createApp(myappcomponent).mount('#myapp')