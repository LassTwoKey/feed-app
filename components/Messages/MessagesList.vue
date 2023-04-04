<template>
  <section
    ref="scrollComponent"
    class="mx-auto flex py-4 px-2 flex-col gap-6 max-lg:gap-4"
  >
    <MessageItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
      :is-text-link="isTextLink"
      :hide-extra="hideExtra"
    />
  </section>
</template>

<script>
// import { ref, onMounted, onUnmounted, Ref } from 'vue'
import MessageItem from './MessageItem.vue'
// import { getChannelPostsBySlug, getTopicPostsBySlug } from '~/api/get-posts'

export default {
  name: 'MessagesList',
  components: {
    MessageItem,
  },
  props: {
    isTextLink: {
      type: Boolean,
      deafult: false,
    },
    hideExtra: {
      type: Boolean,
      deafult: false,
    },
    messages: {
      type: Array,
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
          views: Number,
        },
      ],
    },
    // messageSlug: {
    //   type: String,
    //   default: ''
    // },
    // channelPostsSlug: {
    //   type: String,
    //   default: ''
    // },
    // topicSlug: {
    //   type: String,
    //   default: ''
    // },
    // isSimple: {
    //   type: Boolean,
    //   deafult: false
    // },
    // isTopicTextLink: {
    //   type: Boolean,
    //   deafult: false
    // },
    // isChannelTextLink: {
    //   type: Boolean,
    //   deafult: false
    // }
  },
  // setup() {
  //   const props = defineProps({
  //     isTextLink: {
  //       type: Boolean,
  //       deafult: false
  //     },
  //     hideExtra: {
  //       type: Boolean,
  //       deafult: false
  //     },
  //     message: {
  //       type: Array as any,
  //       required: true,
  //       default: () => ({
  //         id: Number,
  //         header: String,
  //         toChannel: Number,
  //         toPost: Number,
  //         imgId: String,
  //         coverImgId: String,
  //         channel: String,
  //         date: String,
  //         text: String,
  //         views: Number
  //       })
  //     }
  //   })
  // }
  // setup(props: {
  //   messageSlug: string
  //   isTextLink: boolean
  //   topicSlug: string
  //   channelPostsSlug: string
  // }) {
  //   const messages: Ref<any> = ref([])
  //   const scrollComponent = ref<HTMLElement | null>(null)

  //   const loadMoreMessages = async () => {
  //     // const newMessages = await getMessages()
  //     // messages.value.push(...newMessages)
  //     await console.log('loading more...')
  //   }

  //   onMounted(async () => {
  //     try {
  //       if (props.topicSlug) {
  //         const loadedPosts = await getTopicPostsBySlug(props.topicSlug)

  //         messages.value = loadedPosts.map((post: any) => ({
  //           id: post.message_id,
  //           header: post.header,
  //           toChannel: post.channel.channel_id,
  //           toPost: post.channel.message_id,
  //           imgId: post.channel.photo_id,
  //           channel: post.channel.title,
  //           date: post.date,
  //           text: post.text,
  //           views: post.views
  //         }))

  //         // console.log(loadedPosts[0].channel.channel_id)
  //         // await getMessageById('dfs')
  //       } else {
  //         // const loadedMessages = await getMessages()
  //         // messages.value = loadedMessages
  //       }

  //       if (props.channelPostsSlug) {
  //         // const loadedPosts = await getChannelPostsBySlug(props.channelPostsSlug)
  //         const loadedPosts = await this.$axios.$get(`/channels/${slug}/posts`).then((data:any) => data)

  //         messages.value = loadedPosts.map((post: any) => ({
  //           id: post.message_id,
  //           header: post.header,
  //           date: post.date,
  //           text: post.text,
  //           views: post.views
  //         }))
  //       }

  //       window.addEventListener('scroll', handleScroll)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   })

  //   onUnmounted(() => {
  //     window.removeEventListener('scroll', handleScroll)
  //   })

  //   const handleScroll = () => {
  //     const element = scrollComponent.value

  //     if (props.messageSlug) {
  //       return
  //     }

  //     if (!element) return

  //     if (element.getBoundingClientRect().bottom < window.innerHeight) {
  //       loadMoreMessages()
  //     }
  //   }

  //   return {
  //     messages,
  //     scrollComponent
  //   }
  // },
  // mounted() {
  //   if (this.topicSlug) {
  //     const loadPosts = async () => {
  //       const loadedPosts = await this.$axios
  //         .$get(`${this.$config.API_URL}/topics/${this.topicSlug}/posts`)
  //         .then((data: any) => data)

  //       this.messages = loadedPosts
  //         .map((post: any) => ({
  //           id: post.message_id,
  //           header: post.header,
  //           toChannel: post.channel.channel_id,
  //           toPost: post.channel.message_id,
  //           coverImgId: post.cover_img_id,
  //           imgId: post.channel.photo_id,
  //           channel: post.channel.title,
  //           date: post.date,
  //           text: post.text,
  //           views: post.views
  //         }))
  //         .reverse()
  //     }
  //     loadPosts()
  //   }
  //   if (this.channelPostsSlug) {
  //     const loadPosts = async () => {
  //       const loadedPosts = await this.$axios
  //         .$get(`${this.$config.API_URL}/channels/${this.channelPostsSlug}/posts`)
  //         .then((data: any) => data)

  //       this.messages = loadedPosts
  //         .map((post: any) => ({
  //           id: post.message_id,
  //           header: post.header,
  //           date: post.date,
  //           text: post.text,
  //           views: post.views
  //         }))
  //         .reverse()
  //     }

  //     loadPosts()
  //   }
  // }
}
</script>
