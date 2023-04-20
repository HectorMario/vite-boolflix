<script>
import {store} from "../store"
import film from "./filmsApp.vue"
export default{
    components:{
        film
    },
    data(){
        return{
            store,
            name: "main"
        }
    }
}
</script>

<template>
    <div class="container-fluid text-center">
        <div class="row row-cols-3">
            <div class="col" v-for="film in store.filmArray" >
                <film :film="film"/>
            </div>
            <div class="col" v-for="film in store.tvArray" >
                <film :film="film"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
   
</style>