<template>
  <div class="home">
    <p ref="paragraph">
      {{ name }} {{ age }}
    </p> 
    <div>
      <button @click="handleClick">click</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "HomeView",
  setup() {
    console.log("setup");

    const paragraph = ref(null)

    let name = "mario";
    let age = 2;

    const handleClick = () => {
      console.log(paragraph.value); // output: <p> mario 2 </p>
      paragraph.value.classList.add('text')
      paragraph.value.textContent = "hello world"
    };

    return { name, age, handleClick, paragraph };
  }
};
</script>
