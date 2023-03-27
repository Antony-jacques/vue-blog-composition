<template>
  <div class="home">
    home {{ name }} {{ age }}
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  setup(){
    console.log('setup')

    let name = "mario"
    let age = 2

    return {name, age}
  },


}
</script>
