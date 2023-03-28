<template>
  <div class="post-list">
    <h1>postlist</h1>
    <div v-for="post in posts" :key="post.id">
      <SinglePost v-if="togglePost" :post="post" />
    </div>
    <button @click="togglePost = !togglePost">toggle post</button>
  </div>
  <h1>{{test}}</h1>
</template>

<script>
import { computed, onMounted, onUpdated, onUnmounted, ref } from 'vue';
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {

    const togglePost = ref(true)

    onMounted(()=> console.log('mounted hook'))
    onUpdated(()=> console.log("updated hook"))
    onUnmounted(()=> console.log("unmounted hook"))


    return { togglePost }
  },


};
</script>

<style>
</style>