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
    <div class="container-fluid text-center ms-gray">
        <div class="row row-cols-6">
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
    .ms-gray{
        background-color: #141414;
        min-height: calc(100vh - 88px);
    }
</style>