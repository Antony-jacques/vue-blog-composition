<template>
  <div>
  <h3>{{post.title}}</h3></div>
</template>

<script>
export default {
    props: ['post'],
    setup(props){
        console.log('single',props.post)
    }
}
</script>

<style>

</style>>