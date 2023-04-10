<template>
  <div class="relative">
    <button class="flex items-center gap-1 h-9 max-md:h-12" @click="isOpen = !isOpen">
      <UserIcon class="stroke-gray-500 max-md:scale-150" />
      <ArrowIcon class="rotate-90 stroke-gray-500 fill-gray-500 max-md:hidden max-md:scale-150" />
    </button>
    <ul
      v-if="isOpen"
      class="absolute w-56 top-12 max-md:top-14 right-0 bg-white rounded-lg overflow-hidden divide-y z-50 shadow-sm shadow-gray-400"
    >
      <li v-for="item in menuList" :key="item.id" @click="isOpen = false">
        <NuxtLink
          class="flex text-gray-700 hover:bg-gray-100 font-semibold py-2 px-3 max-md:py-3 duration-200"
          :to="`/settings/${item.id}`"
          >{{ item.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import ArrowIcon from '~/components/icons/ArrowIcon.vue'
import UserIcon from '~/components/icons/UserIcon.vue'

export default {
  name: 'NuxtDropdown',
  components: {
    ArrowIcon,
    UserIcon
  },

  data() {
    return {
      isOpen: false,
      menuList: [
        { id: 'l1', text: 'Menu 1', to: '#' },
        { id: 'l2', text: 'Menu 2', to: '#' },
        { id: 'l3', text: 'Menu 3', to: '#' }
      ]
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.isOpen = false
        }
      })
    }
  }
}
</script>
