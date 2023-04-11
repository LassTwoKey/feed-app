<template>
  <main class="flex gap-6">
    <Sidebar />
    <div
      class="flex-auto flex gap-6 my-6 max-w-7xl justify-end max-xl:mr-6 max-lg:mr-0 max-lg:items-center max-lg:px-4 max-lg:my-4 max-lg:gap-4 max-xl:justify-start max-xl:flex-col"
    >
      <div class="max-w-2xl">
        <PostList v-if="posts" :posts="posts" is-text-link />
      </div>
      <div class="w-96 max-xl:max-w-2xl max-xl:w-full"></div>
    </div>
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
  transition: {
    name: 'home',
    mode: 'out-in'
  },
  computed: {
    posts() {
      return [...this.$store.getters['posts/getPosts']]
    }
  }
})
</script>
