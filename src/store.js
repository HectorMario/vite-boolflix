import { reactive } from "vue";

export const store = reactive({
  filmArray: [],
  apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=34c99cb0c074026605908a288deff379",
  apiUrlMovie: "https://api.themoviedb.org/3/search/movie?api_key=34c99cb0c074026605908a288deff379",
  query: ""
});

