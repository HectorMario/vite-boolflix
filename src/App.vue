<script >
import navBar from './components/navBarApp.vue'
import {store} from './store'
import axios from 'axios'
import mainApp from './components/mainApp.vue'
export default{
  components: {
    navBar,
    mainApp
  },
  data(){
    return{
      store
    }
  },
  methods:{
    
    callapi(api) {
      axios.get(api, {
        params: {
            query : this.store.query
        }
      }).then(resp => {
        if(this.store.filmArray == ""){
          this.store.filmArray = resp.data.results
        } else {
          this.store.tvArray = resp.data.results
        }
      })
    },
   
    calls(){
      this.store.filmArray = ""
      this.callapi(this.store.apiUrlMovie),
      this.callapi(this.store.apiUrlTv),
      this.store.query = ""
    }

  }
}
</script>

<template>
 <navBar @search="calls"/>
 <mainApp/>
</template>

<style lang="scss">
@use "./style/general.scss" as *
</style>
