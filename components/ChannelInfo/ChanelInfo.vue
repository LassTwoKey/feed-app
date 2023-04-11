<template>
  <div v-if="isSide" class="bg-white rounded-lg overflow-hidden">
    <div class="relative h-16">
      <img
        class="absolute w-full h-full inset-0 object-cover"
        src="~/assets/img/profile-background.png"
        alt="profile-background"
      />
    </div>
    <div class="px-4 pb-1 pt-0 relative">
      <span class="rounded-full overflow-hidden absolute -top-8 left-4">
        <img
          :src="setLink(channelData.photo_id, 'PostDetailProfilePicture')"
          alt="profile picture"
        />
      </span>
      <div class="pl-16 ml-2 mb-2">
        <p class="text-gray-400">{{ channelData.title }}</p>
        <h3 class="text-xl font-medium text-gray-700">{{ channelData.username }}</h3>
      </div>
      <p class="spec-text break-words" v-html="formatText(channelData.about, true)"></p>
      <p class="mt-2">
        Ведёт блог с <span class="font-medium">{{ createChannelDate(channelData.date) }}</span>
      </p>
      <div class="flex gap-4 justify-between py-1 mt-2 text-center text-gray-400 border-t-1">
        <p>
          <span class="text-blue-600 font-medium text-lg max-sm:text-xl">{{
            numFormat(channelData.followers)
          }}</span>
          Подписчиков
        </p>
        <p>
          <span class="text-violet-600 font-medium text-lg max-sm:text-xl"
            >+{{ channelData.mentions }}</span
          >
          Упоминайний
        </p>
        <p>
          <span class="text-green-400 font-medium text-lg max-sm:text-xl"
            >+{{ channelData.reactions }}
          </span>
          Реакций
        </p>
      </div>
    </div>
  </div>
  <div v-else class="bg-white rounded-lg overflow-hidden">
    <div class="relative h-24">
      <img
        class="absolute w-full h-full inset-0 object-cover"
        :src="
          channelData.cover_img_id
            ? setLink(channelData.cover_img_id, 'CoverProfileImage')
            : 'https://imagedelivery.net/pG6XD80Cie3F9jOvwRfTxg/964f0052-bbdb-451d-f3ce-75fc9bd3d400/CoverProfileImage'
        "
        alt="profile-background"
      />
    </div>
    <div class="p-4 pt-0 relative">
      <span class="rounded-full overflow-hidden absolute -top-12 left-4">
        <img :src="setLink(channelData.photo_id, 'ChannelProfilePicture')" alt="profile picture" />
      </span>
      <div class="pl-24 ml-4 mb-4">
        <p class="text-gray-400">{{ channelData.title }}</p>
        <h3 class="text-xl font-medium text-gray-700">{{ channelData.username }}</h3>
      </div>
      <p class="break-words" v-html="formatText(channelData.about, true)"></p>
      <div class="flex justify-between items-center mt-4">
        <div class="text-left flex flex-col gap-1 max-sm:gap-y-3">
          <p class="max-sm:text-center text-gray-500">
            <span class="max-sm:font-medium max-sm:text-gray-700 max-sm:text-xl max-sm:block">{{
              numFormat(channelData.followers)
            }}</span>
            Подписчиков
          </p>
        </div>
        <div class="text-left flex flex-col gap-1 max-sm:gap-y-3">
          <p class="max-sm:text-center text-gray-500">
            Ведёт блог с
            <span class="max-sm:font-medium max-sm:text-gray-700 max-sm:text-xl max-sm:block">{{
              createChannelDate(channelData.date)
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SIDE_TEXT_LEN } from '~/utils/constants'
import { cutString, formattedText, setCloudfareLink, formatNumber } from '~/utils'
import { channelDate } from '~/utils/date'

export default {
  name: 'NuxtChanelInfo',
  components: {},
  props: {
    isSide: {
      type: Boolean,
      default: false
    },
    channelData: {
      type: Object as any,
      required: true,
      default: () => ({
        // channel_id: Number,
        about: String,
        cover_img_id: String,
        date: String,
        photo_id: String,
        subscribers: Number,
        title: String,
        username: String

        // mentions: String,
        // reactions: String
      })
    }
  },
  data() {
    return {}
  },
  methods: {
    cutStr(text: string) {
      return cutString(text, SIDE_TEXT_LEN)
    },
    setLink(id: string, variant: string) {
      return setCloudfareLink(id, variant)
    },
    createChannelDate(date: string) {
      return channelDate(date)
    },
    formatText(text: string, isLinked?: boolean) {
      return formattedText(text, isLinked)
    },
    numFormat(num: number) {
      return formatNumber(num)
    }
  }
}
</script>

<style></style>
