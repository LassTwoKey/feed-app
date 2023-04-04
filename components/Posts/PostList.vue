<template>
  <section ref="scrollComponent" class="mx-auto flex p-4 flex-col gap-6 max-lg:gap-4">
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :is-text-link="isTextLink"
      :hide-extra="hideExtra"
    />
  </section>
</template>

<script lang="ts">
import PostItem from './PostItem.vue'

export default {
  name: 'PpstList',
  components: {
    PostItem
  },
  props: {
    isTextLink: {
      type: Boolean,
      deafult: false
    },
    hideExtra: {
      type: Boolean,
      deafult: false
    },
    posts: {
      type: Array as any,
      required: true,
      default: () => [
        {
          id: Number,
          header: String,
          toChannel: Number,
          toPost: Number,
          imgId: String,
          coverImgId: String,
          channel: String,
          date: String,
          text: String,
          views: Number
        }
      ]
    }
  }
}
</script>
