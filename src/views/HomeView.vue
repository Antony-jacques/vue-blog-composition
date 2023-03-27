<template>
  <div class="home">
    <h1>ref</h1>
    <p>
      {{ firstUser.name }} {{ firstUser.age }}
    </p> 
    <div>
      <button @click="updateUser">click</button>
      <input type="text" v-model="name">
    </div>

    <h2>reactive</h2>
    <p>{{ secondUser.name }} {{ secondUser.age }}</p>
    <button @click="updateSecondUser">update user 2</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: "HomeView",
  setup() {
    console.log("setup");

    const firstUser = ref({
      name: "Mario",
      age: 20
    })

    // reactive does not work with primitive like string, number...
    const secondUser = reactive({
        name: "Luigi",
        age: 35
    })

    const updateUser = () => {
      firstUser.value.name = "Luigi"
      firstUser.value.age = 35
    };

    const updateSecondUser = ()=> {
      secondUser.name = "toto"
      secondUser.age = 60
    }

    return { firstUser, updateUser, secondUser, updateSecondUser };
  }
};
</script>
