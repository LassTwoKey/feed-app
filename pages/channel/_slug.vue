<template>
  <main class="flex gap-6">
    <TheSidebar class="max-lg:hidden" />
    <div
      class="flex-auto flex gap-6 my-6 max-w-7xl justify-end max-xl:mr-6 max-lg:mr-0 max-lg:items-center max-lg:px-4 max-lg:my-4 max-lg:gap-4 max-xl:justify-start max-xl:flex-col"
    >
      <div class="max-w-2xl">
        <ChanelInfo v-if="loadedChannel" :channel-data="loadedChannel" />
      </div>
      <div class="w-96 max-xl:max-w-2xl max-xl:w-full"></div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import TheSidebar from '~/components/layout/SideBar/Sidebar.vue'
import ChanelInfo from '~/components/ChannelInfo/ChanelInfo.vue'

export default Vue.extend({
  name: 'PostPage',
  components: {
    TheSidebar,
    ChanelInfo
  },
  computed: {
    loadedChannel() {
      const channels = [...this.$store.getters['channels/getChannels']]
      return channels.find((channel) => channel.channel_id === +this.$route.params.slug)
    }
  }
})
</script>
