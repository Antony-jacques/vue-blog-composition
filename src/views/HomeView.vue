<template>
  <div class="home">
    <h1>ref</h1>
    <p>{{search}}</p>
    <input v-model="search"  type="text">
    <li v-for="name in getName" :key="name">{{ name}}</li>

  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
export default {
  name: "HomeView",
  setup() {

    const names= ref(["Mario","Luigi","Koopa","Toad","Bowser","Yoshi"])

    const search = ref('')

    const getName = computed(()=> {
      return names.value.filter( name => name.includes(search.value))
    })


    return { names, search, getName };
  }
};
</script>
