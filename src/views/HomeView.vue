<template>
  <div class="home">
    <p>
      {{ name }} {{ age }}
    </p> 
    <div>
      <button @click="handleClick">click</button>
      <button @click="age++">incement age</button>
      <input type="text" v-model="name">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "HomeView",
  setup() {
    console.log("setup");

    const name = ref("mario");
    const age = ref(2);

    const handleClick = () => {
      console.log(); // output: <p> mario 2 </p>
      name.value = "Luigi"
      age.value = 35
    };

    return { name, age, handleClick,  };
  }
};
</script>
