<template>
  <nav class="flex-none w-80 max-2xl:w-72 max-xl:w-64 bg-white">
    <Topics :items="topics" />
  </nav>
</template>

<script lang="ts">
import Topics from '~/components/Topics/Topics.vue'

export default {
  name: 'NuxtTheSidebar',
  components: {
    Topics
  },
  data() {
    return {
      showSpoiler: false
    }
  },
  computed: {
    topics() {
      return [...this.$store.getters['topics/getTopics']]
    }
  }
}
</script>
