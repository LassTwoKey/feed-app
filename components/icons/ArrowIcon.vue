<template>
  <svg width="14px" height="14px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path
      :fill="color"
      d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'NuxtArrowIcon',
  props: {
    color: {
      type: String,
      default: String
    }
  },
  data() {
    return {}
  }
}
</script>
