<script>
import {store} from "../store"
export default{
    data(){
        return{
            store,
            name: "navBar"
        }
    }
}
</script>

<template>
    <div class="container-fluid d-flex justify-content-between align-items-center p-3 ms-black">
            <h1>boolflix</h1>
        <div class="search">
            <input type="text" v-model="store.query">
            <button @click="$emit('search')">Search</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .ms-black{
        background-color: black;
        h1{
            color: red
        }
    }
</style>