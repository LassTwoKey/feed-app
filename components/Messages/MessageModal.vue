<template>
  <div
    :class="{
      ['background fixed w-full h-full left-0 top-0 z-50 px-4 duration-300 overflow-y-auto']: true,
      ['left-full']: !isOpen,
      ['left-0']: isOpen,
    }"
  >
    <div>
      <div class="flex h-4 justify-end">
        <!-- <button class="w-12 h-12 flex justify-center items-center" @click="$emit('search-close')">
          <CloseIcon color="white" />
        </button> -->
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import CloseIcon from '../icons/CloseIcon.vue'
import useTelegram from '~/hooks/useTelegram'

export default {
  name: 'MessageModal',
  components: {
    // CloseIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.closeModal()
  },
  methods: {
    closeModal() {
      const { tg } = useTelegram()
      tg.onEvent('mainButtonClicked', () => {
        this.$emit('search-close')
        tg.MainButton.hide()
      })
    },
  },
}
</script>

<style>
.background {
  background-color: var(--tg-theme-bg-color);
}
</style>
