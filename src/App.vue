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
    
    callapi() {
      axios.get(this.store.apiUrlMovie, {
        params: {
            query : this.store.query
        }
      }).then(resp => {
        this.store.filmArray = resp.data.results
        console.log(this.store.filmArray);
      })
    }
  }
}
</script>

<template>
 <navBar @search="callapi"/>
 <mainApp/>
</template>

<style lang="scss">
@use "./style/general.scss" as *
</style>
