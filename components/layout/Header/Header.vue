<template>
  <header
    class="h-12 fixed inset-0 bg-white py-2 flex items-center shadow-sm shadow-gray-100 border-b border-gray-300 z-50"
  >
    <div class="w-full px-4 flex justify-between items-center gap-3">
      <NuxtLink class="text-rose-600 font-bold text-3xl" to="/">Feed App</NuxtLink>
      <div class="relative h-9 w-96 flex items-center max-lg:hidden">
        <SearchIcon class="relative z-10 ml-2" color="grey" />
        <input
          type="text"
          class="rounded-full pl-8 border border-slate-400 focus:border-rose-600 absolute inset-0 w-full h-full duration-200"
        />
      </div>
      <div class="flex items-center gap-2 max-md:gap-0">
        <div class="lg:hidden flex-1 flex justify-end">
          <button
            class="w-9 h-9 max-md:w-12 max-md:h-12 flex justify-center items-center hover:bg-gray-200 md:rounded-full"
            @click="searchOpen = !searchOpen"
          >
            <SearchIcon class="relative z-10 max-md:scale-150" color="grey" />
          </button>
        </div>
        <a
          class="max-lg:hidden flex items-center justify-center text-gray-600 font-medium bg-gray-200 hover:bg-gray-300 rounded-full h-9 px-3 py-1 text-sm select-none duration-200"
          href="https://t.me/Lass2000"
          >Привязать канал</a
        >
        <a
          class="lg:hidden flex items-center mr-2 justify-center text-gray-500 hover:bg-gray-200 md:rounded-full w-9 h-9 max-md:w-12 max-md:h-12 text-sm select-none duration-200"
          href="https://t.me/Lass2000"
          ><LinkIcon class="fill-gray-500 group-hover:fill-white max-md:scale-150"
        /></a>
        <Dropdown />
        <HeaderMenu />
      </div>
    </div>
    <Modal
      :search-open="searchOpen"
      :class="{ ['top-0']: searchOpen }"
      @search-close="() => (searchOpen = false)"
    />
  </header>
</template>

<script lang="ts">
import Dropdown from './HeaderDropdown.vue'
import HeaderMenu from './HeaderMenu.vue'
import Modal from '~/components/ui/Modal.vue'
import SearchIcon from '~/components/icons/SearchIcon.vue'
import LinkIcon from '~/components/icons/LinkIcon.vue'

export default {
  name: 'NuxtTheHeader',
  components: {
    Dropdown,
    Modal,
    SearchIcon,
    LinkIcon,
    HeaderMenu
  },
  data() {
    return {
      searchOpen: false
    }
  }
}
</script>
