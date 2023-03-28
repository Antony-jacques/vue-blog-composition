<template>
  <div class="home">
    <h1>home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <h3>loading</h3>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import PostList from "../components/postList.vue";
import getPosts from '../composables/getPosts'
export default {
  name: "HomeView",
  components: { PostList },
  setup() {

    const { posts, error, loadData } = getPosts()

    onBeforeMount(() => {
      loadData();
    });

    return { posts, error };
  },
};
</script>
