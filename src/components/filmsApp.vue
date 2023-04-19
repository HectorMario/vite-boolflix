<script>
import {store} from "../store"
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default{
   
    props:{
        film : Object
    },
    data(){
        return{
            store,
            name: "film"
            
        }
    }
}
</script>

<template>
    <div class="ms-container">
        <div class="img">
            <img src="" alt="">
        </div>
        <h2>{{ film.title }}</h2>
        <h3>{{film.original_title}}</h3>
        <h5><span class="fi" :class="`fi-${film.original_language}`"></span> </h5>
        <p>{{film.vote_average}}</p>
    </div>
</template>

<style scoped lang="scss">
   
</style>