<template>
  <div class="lg:hidden flex items-center">
    <button class="space-y-1.5 max-lg:ml-4 w-8" @click="toggle">
      <span
        :class="{
          ['block w-4 h-0.5 max-md:h-1 bg-gray-500 rounded-3xl duration-150']: true,
          ['rotate-45 w-8 translate-y-2.5']: show
        }"
      ></span>
      <span
        :class="{
          ['block w-full h-0.5 max-md:h-1 bg-gray-500 duration-150']: true,
          ['scale-0 rounded-3xl']: show
        }"
      ></span>
      <span
        :class="{
          ['block w-6 h-0.5 max-md:h-1 bg-gray-500 duration-150']: true,
          ['-rotate-45 w-8 -translate-y-2.5 rounded-3xl']: show
        }"
      ></span>
    </button>
    <Topics :is-open="show" :items="topics" @close="() => (show = false)" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Topics from '~/components/Topics/Topics.vue'
export default {
  name: 'NuxtHeaderMenu',
  components: {
    Topics
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    topics() {
      return [...this.$store.getters['topics/getTopics']]
    }
  },
  methods: {
    toggle() {
      if (this.show) {
        document.body.classList.remove('lock')
      } else {
        document.body.classList.add('lock')
      }
      this.show = !this.show
    }
  }
}
</script>
