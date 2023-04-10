<template>
  <main class="flex gap-6">
    <TheSidebar class="max-lg:hidden" />
    <div
      class="flex-auto flex gap-6 my-6 max-w-7xl justify-end max-xl:mr-6 max-lg:mr-0 max-lg:items-center max-lg:px-4 max-lg:my-4 max-lg:gap-4 max-xl:justify-start max-xl:flex-col"
    >
      <div class="max-w-2xl">
        <h1 class="text-xl mb-6 max-lg:mb-4 font-normal text-gray-500">
          <span class="text-gray-700 font-medium">topic slug</span>
        </h1>
      </div>
      <div class="w-96 max-xl:max-w-2xl max-xl:w-full"></div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import TheSidebar from '~/components/layout/SideBar/Sidebar.vue'

export default Vue.extend({
  name: 'PostPage',
  components: {
    TheSidebar
  }
})
</script>
