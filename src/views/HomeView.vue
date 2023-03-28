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
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const loadData = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        console.log("here the data", data);

        if(!data.ok){
          throw new Error("no data available");
        }
        posts.value = await data.json();
        console.log("here the posts", posts);
      } catch (err) {
        error.value = err.message;
      }
    };

    onBeforeMount(() => {
      loadData();
    });

    return { posts, error };
  },
};
</script>
