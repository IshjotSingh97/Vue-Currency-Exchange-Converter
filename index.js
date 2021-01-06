const API = ""
const host = 'api.frankfurter.app';
const myappcomponent = {
    data(){
        return {
            currencyvalue : 1,
            currencybase : null,
            currencies : [],
            rates : []
        }
    },
    methods : {
        async getExchangeRates(){
            console.log("Request...hit")
            console.log(`${this.currencyvalue}`)
            console.log(`${this.currencybase}`)
            let query = `https://api.exchangeratesapi.io/latest?base=${this.currencybase}`
            console.log(query)
            await axios.get(query)
            .then((response)=>{
                console.log(response.data)
                this.rates = response.data.rates
                console.log(this.rates)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        async getCurriencies(){
            await axios.get(`https://${host}/currencies`)
            .then((response)=>{
                this.currencies = response.data
                console.log(this.currencies)
                console.log(`https://${host}/currencies`)
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