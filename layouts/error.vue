<template>
  <main class="px-4 flex items-center justify-center">
    <div class="text-center z-10 text-xl">
      <h1 v-if="error.statusCode === 404" class="text-2xl font-medium leading-9 text-gray-700">
        404 - Страница не найдена
      </h1>
      <h1 v-else class="text-2xl font-medium leading-9 text-gray-700 mb-2">Произошла ошибка</h1>
      <p class="mb-6">К сожалению... Мы не смогли найти страницу, которую вы искали.</p>
      <NuxtLink to="/" class="font-semibold inline-block px-6 py-2">На главную</NuxtLink>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  layout: 'default', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: 'TELESEO - 404'
    }
  }
}
</script>
