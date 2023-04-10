<template>
  <main class="flex gap-6">
    <TheSidebar class="max-lg:hidden" />
    <div
      class="flex-auto flex gap-6 my-6 max-w-7xl justify-end max-xl:mr-6 max-lg:mr-0 max-lg:items-center max-lg:px-4 max-lg:my-4 max-lg:gap-4 max-xl:flex-col-reverse"
    >
      <div class="max-w-2xl">
        <PostList v-if="loadedPost" :posts="[loadedPost]" />
      </div>
      <div class="w-96 max-xl:max-w-2xl max-xl:w-full">
        <ChanelInfo v-if="loadedPost" :channel-data="loadedPost.channel" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import TheSidebar from '~/components/layout/SideBar/Sidebar.vue'
import ChanelInfo from '~/components/ChannelInfo/ChanelInfo.vue'
import PostList from '~/components/Posts/PostList.vue'

export default Vue.extend({
  name: 'TopicPage',
  components: {
    TheSidebar,
    PostList,
    ChanelInfo
  },
  computed: {
    loadedPost() {
      const posts = [...this.$store.getters['posts/getPosts']]
      return posts.find((post) => post.message_id === +this.$route.params.slug)
    }
  }
})
</script>
