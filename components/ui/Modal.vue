<template>
  <div
    :class="{
      ['fixed w-full h-full left-0 bg-white z-50 px-4 duration-300']: true,
      ['top-full']: !searchOpen,
      ['top-0']: searchOpen
    }"
  >
    <div class="flex justify-between items-center">
      <p class="text-2xl font-semibold text-gray-600">Поиск</p>
      <button class="w-12 h-12 flex justify-center items-center" @click="$emit('search-close')">
        <CloseIcon color="grey" />
      </button>
    </div>
    <div class="relative h-12 w-full flex items-center">
      <SearchIcon class="relative z-10 ml-3 stroke-gray-500" size="25px" color="grey" />
      <input
        type="text"
        class="pl-12 text-xl bg-gray-100 text-dark absolute inset-0 w-full h-full duration-200 border-b-2 focus:bg-gray-200 focus:border-rose-600"
      />
    </div>
  </div>
</template>

<script lang="ts">
import SearchIcon from '../icons/SearchIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'
export default {
  name: 'NuxtDropdown',
  components: {
    SearchIcon,
    CloseIcon
  },
  props: {
    searchOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>
