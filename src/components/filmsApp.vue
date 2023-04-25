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
        },
        callIma(path){
            return `https://www.themoviedb.org/t/p/w220_and_h330_face${path}`
        }
    }
}
</script>

<template>
    <div class="ms-container">
        <div class="img my-2">
            <img :src="callIma(this.film.poster_path)" alt="">
        </div>
        <div class="info ">
            <h2>{{ changeTittle('tittle') }}</h2>
            <h3>{{changeTittle('h3')}}</h3>
            <h5><span class="fi" :class="`fi-${film.original_language}`"></span> </h5>
            <p>{{film.vote_average}}</p>
            <p><i class="fa-solid fa-star" style="color: #dfe30d;"></i></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms-container{
    width: 220px;
    z-index: 333333333;
        .info{
        display: none;
        font-size: 1rem;
        h2{
            font-size: small;
        }
    }
    &:hover{
         .info{
             display: block;
             color: #fff;
             
         }
         .img{
             display: none;
         }
    }
}
</style>