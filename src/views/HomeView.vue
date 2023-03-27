<template>
  <div class="home">
  <h1>home</h1>
    <PostList  :posts="posts" />

  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import PostList from '../components/postList.vue'
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = [
      {title: "welcome to the blog", body:'lorem ipsum', id: 1},
      {title: "top 5 css tips", body:'loem ipsum', id: 2}
    ]


    return { posts };
  }
};
</script>
