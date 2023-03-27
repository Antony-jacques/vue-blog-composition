<template>
  <div class="home">
    home {{ name }} {{ age }}
    <div>
      <button @click="handleClick">click</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  setup() {
    console.log("setup");

    let name = "mario";
    let age = 2;

    const handleClick = () => {
      console.log("click");
    };

    return { name, age, handleClick };
  }
};
</script>
