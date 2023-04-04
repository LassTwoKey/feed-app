<template>
  <article
    class="bg-white block rounded-lg border-1 overflow-hidden hover:border-1 hover:border-slate-400 duration-150 shadow-message"
  >
    <div class="bg-gray-200">
      <div class="cursor-pointer" @click="onClick">
        <picture v-if="message.coverImgId" class="flex justify-center">
          <source
            media="(min-width: 442px)"
            :srcset="setLink(message.coverImgId, 'PostImage')"
          />
          <img
            :src="setLink(message.coverImgId, 'PostImageSmall')"
            alt="Изобравжение поста"
          />
        </picture>
      </div>
    </div>
    <div class="p-4">
      <div class="flex gap-3 items-center mb-3 justify-between max-sm:mb-2">
        <div class="flex gap-3 items-center">
          <a :href="`https://t.me/${message.channel}`">
            <span
              class="rounded-full flex flex-none w-9 overflow-hidden inline-block"
            >
              <img
                :src="setLink(message.imgId, 'PostProfilePicture')"
                alt="Изобравжение профиля"
              />
            </span>
          </a>
          <a :href="`https://t.me/${message.channel}`">
            <h4 class="font-medium hover:underline hover:underline-offset-2">
              {{ message.channel }}
            </h4>
          </a>
        </div>
        <p class="text-gray-500">
          {{ dateFormat(message.date) }}
        </p>
      </div>

      <div
        v-if="isTextLink"
        :class="{
          ['relative before:block before:absolute before:bottom-0 before:w-full block h-72 overflow-hidden before:h-28 before:bg-gradient-to-t before:from-white before:pointer-events-none']:
            !maxLen(message.text) && hideExtra,
        }"
      >
        <h3
          class="text-2xl font-semibold mb-3 cursor-pointer"
          @click="onClick"
          v-html="formatText(message.header, false)"
        ></h3>
        <div class="mb-3 overflow-hidden">
          <p
            class="break-words max-w-full cursor-pointer"
            @click="onClick"
            v-html="formatText(message.text, false, message.entities)"
          ></p>
        </div>
      </div>
    </div>

    <div
      :class="{
        ['flex items-center gap-4 justify-between p-4 pb-3 max-sm:py-2']: true,
        ['max-h-96']: hideExtra,
      }"
    >
      <div class="flex gap-4">
        <div class="flex gap-1 items-center">
          <ViewIcon class="stroke-gray-400" />
          <span class="text-gray-400">{{ numFormat(message.views) }}</span>
        </div>
        <button class="flex gap-1 items-center">
          <ForwardIcon class="fill-gray-400" />
          <span class="text-gray-400">{{ 1 }}</span>
        </button>
      </div>
      <button>
        <ReactArrowIcon class="fill-gray-400" />
      </button>
    </div>

    <MessageModal :is-open="isOpen" @search-close="isOpen = false">
      <h1 class="title text-2xl font-semibold mb-3">О посте</h1>
      <MessageDetail :message="message" />
    </MessageModal>
  </article>
</template>

<script>
import ViewIcon from '../icons/ViewIcon.vue'
import ReactArrowIcon from '../icons/ReactArrowIcon.vue'
import ForwardIcon from '../icons/ForwardIcon.vue'
import MessageModal from './MessageModal.vue'
import MessageDetail from './MessageDetail.vue'
import { TEXT_LEN } from '~/utils/constants'
import {
  isMaxLength,
  setCloudfareLink,
  formattedText,
  formatNumber,
} from '~/utils'
import { postDateFormat } from '~/utils/date'
import useTelegram from '~/hooks/useTelegram'

export default {
  name: 'MessageItem',
  components: {
    ViewIcon,
    ReactArrowIcon,
    ForwardIcon,
    MessageModal,
    MessageDetail,
  },
  props: {
    message: {
      type: Object,
      required: true,
      default: () => ({
        id: Number,
        header: String,
        toChannel: Number,
        toPost: Number,
        imgId: String,
        coverImgId: String,
        channel: String,
        date: String,
        text: String,
        views: Number,
        entities: Array,
      }),
    },
    hideExtra: {
      type: Boolean,
      deafult: false,
    },
    isTextLink: {
      type: Boolean,
      deafult: false,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    maxLen(text) {
      return isMaxLength(text, TEXT_LEN)
    },
    setLink(id, variant) {
      return setCloudfareLink(id, variant)
    },
    formatText(text, highlight, entities) {
      return formattedText(text, highlight, entities)
    },
    dateFormat(date) {
      return postDateFormat(date)
    },
    numFormat(num) {
      return formatNumber(num)
    },
    onClick() {
      this.loadMessageDetails()
      this.toggle()

      const { tg } = useTelegram()
      tg.MainButton.text = 'Вернуться'
      // tg.MainButton.textColor = '#333'
      // tg.MainButton.color = '#f91'
      tg.MainButton.show()
    },
    toggle() {
      if (!this.isOpen) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    },
    loadMessageDetails() {
      console.log('loading...')
    },
  },
}
</script>

<style>
.title {
  color: var(--tg-theme-text-color);
}
</style>
