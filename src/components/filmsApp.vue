<script>
import { computed } from "@vue/reactivity";
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
    },
    methods: {
        changeTittle(para){
            if(!this.film.title){
                if(para == 'tittle'){
                    return this.film.name
                }
                if(para == 'h3'){
                    return this.film.original_name
                }
            } else{
                return this.film.title
            }
        }
    }
}
</script>

<template>
    <div class="ms-container">
        <div class="img">
            <img src="" alt="">
        </div>
        <h2>{{ changeTittle('tittle') }}</h2>
        <h3>{{changeTittle('h3')}}</h3>
        <h5><span class="fi" :class="`fi-${film.original_language}`"></span> </h5>
        <p>{{film.vote_average}}</p>
    </div>
</template>

<style scoped lang="scss">
   
</style>