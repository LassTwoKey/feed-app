<template>
  <div>
    <TheHeader />
    <Nuxt keep-alive />
  </div>
</template>

<script lang="ts">
import TheHeader from '~/components/layout/Header/Header.vue'
export default {
  components: {
    TheHeader
  }
}
</script>
