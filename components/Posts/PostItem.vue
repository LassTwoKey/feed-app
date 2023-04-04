<template>
  <article
    class="bg-white block rounded-lg border-1 overflow-hidden hover:border-1 hover:border-slate-400 duration-150 shadow-message"
  >
    <div class="bg-gray-200">
      <div class="cursor-pointer" @click="onClick">
        <picture v-if="post.coverImgId" class="flex justify-center">
          <source media="(min-width: 442px)" :srcset="setLink(post.coverImgId, 'PostImage')" />
          <img :src="setLink(post.coverImgId, 'PostImageSmall')" alt="Изобравжение поста" />
        </picture>
      </div>
    </div>
    <div class="p-4">
      <div class="flex gap-3 items-center mb-3 justify-between max-sm:mb-2">
        <div class="flex gap-3 items-center">
          <a :href="`https://t.me/${post.channel}`">
            <span class="rounded-full flex flex-none w-9 overflow-hidden inline-block">
              <img :src="setLink(post.imgId, 'PostProfilePicture')" alt="Изобравжение профиля" />
            </span>
          </a>
          <a :href="`https://t.me/${post.channel}`">
            <h4 class="font-medium hover:underline hover:underline-offset-2">
              {{ post.channel }}
            </h4>
          </a>
        </div>
        <p class="text-gray-500">
          {{ dateFormat(post.date) }}
        </p>
      </div>

      <div
        v-if="isTextLink"
        :class="{
          ['relative before:block before:absolute before:bottom-0 before:w-full block h-72 overflow-hidden before:h-28 before:bg-gradient-to-t before:from-white before:pointer-events-none']:
            !maxLen(post.text) && hideExtra
        }"
      >
        <h3
          class="text-2xl font-semibold mb-3 cursor-pointer"
          @click="onClick"
          v-html="formatText(post.header, false)"
        ></h3>
        <div class="mb-3 overflow-hidden">
          <p
            class="break-words max-w-full cursor-pointer"
            @click="onClick"
            v-html="formatText(post.text, false, post.entities)"
          ></p>
        </div>
      </div>
    </div>

    <div
      :class="{ ['flex items-center gap-1 p-4 pb-3 max-sm:py-2']: true, ['max-h-96']: hideExtra }"
    >
      <ViewIcon class="stroke-gray-400" />
      <span class="text-gray-400">{{ numFormat(post.views) }} Просмотров</span>
    </div>
  </article>
</template>

<script lang="ts">
import ViewIcon from '../icons/ViewIcon.vue'
import { TEXT_LEN } from '~/utils/constants'
import { isMaxLength, setCloudfareLink, formattedText, formatNumber } from '~/utils'
import { postDateFormat } from '~/utils/date'
export default {
  name: 'PostItem',
  components: {
    ViewIcon
  },
  props: {
    post: {
      type: Object as any,
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
        entities: Array
      })
    },
    hideExtra: {
      type: Boolean,
      deafult: false
    },
    isTextLink: {
      type: Boolean,
      deafult: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    maxLen(text: string) {
      return isMaxLength(text, TEXT_LEN)
    },
    setLink(id: string, variant: string) {
      return setCloudfareLink(id, variant)
    },
    formatText(text: string, highlight?: boolean, entities?: any) {
      return formattedText(text, highlight, entities)
    },
    dateFormat(date: string) {
      return postDateFormat(date)
    },
    numFormat(num: number) {
      return formatNumber(num)
    },
    onClick() {
      this.loadMessageDetails()
      this.toggle()
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
    }
  }
}
</script>
