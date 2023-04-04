<template>
  <main class="flex">
    <Sidebar />
    <PostList :posts="posts" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from '~/components/layout/SideBar/Sidebar.vue'
import PostList from '~/components/Posts/PostList.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Sidebar,
    PostList
  },
  computed: {
    posts() {
      return [...this.$store.getters['posts/getPosts']]
    }
  }
})
</script>
