<template>
  <section ref="scrollComponent" class="mx-auto flex flex-col gap-6 max-lg:gap-4">
    <PostItem
      v-for="post in posts"
      :key="post.message_id"
      :post="post"
      :is-text-link="isTextLink"
      :hide-extra="hideExtra"
    />
  </section>
</template>

<script>
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
      type: Array,
      required: true,
      default: () => [
        {
          message_id: Number,
          header: String,
          channel: {
            channel_id: Number,
            username: String,
            photo_id: String,
            cover_img_id: String,
            about: String,
            title: String,
            subscribers: Number,
            date: String
          },
          cover_img_id: String,
          date: String,
          text: String,
          views: Number
        }
      ]
    }
  }
}
</script>
