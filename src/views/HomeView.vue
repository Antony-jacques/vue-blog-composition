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
    //imagine that we don't want the entire post.body
    const posts = [
      {title: "welcome to the blog", body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem maxime harum impedit laborum quo iusto exercitationem, a quisquam velit', id: 1},
      {title: "top 5 css tips", body:'lorem ipsum', id: 2}
    ]

    return { posts };
  }
};
</script>
