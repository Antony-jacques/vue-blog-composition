import { ref } from "vue"; 
const getPosts = () => {
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

    return { posts, error, loadData }
}

export default getPosts