<template>
  <div
    :class="{
      ['rounded-br-lg overflow-hidden max-lg:fixed left-0 top-12 w-80 max-2xl:w-72 max-xl:w-64 max-lg:w-full max-lg:h-full max-lg:bg-slate-600 duration-200']: true,
      ['max-lg:top-12']: isOpen,
      ['max-lg:top-full']: !isOpen
    }"
  >
    <h3
      class="text-gray-500 uppercase font-medium text-sm px-3 pt-3 mb-1 max-lg:text-lg max-lg:text-gray-200"
    >
      Топики
    </h3>
    <ul>
      <li v-for="item in items" :key="item.id">
        <button
          v-if="!item.to"
          class="flex w-full items-center py-1 px-3 font-medium text-gray-700 hover:bg-gray-100 max-lg:hover:bg-slate-500 gap-2"
          @click="openCategory(item.id)"
        >
          <UserIcon class="stroke-gray-700 max-lg:stroke-white" />
          <span class="flex-auto text-left max-lg:text-2xl max-lg:text-white">{{ item.name }}</span>
          <ArrowIcon :class="{ ['max-lg:fill-gray-100']: true, ['rotate-90']: item.isOpen }" />
        </button>
        <div @click="linkClick">
          <NuxtLink
            v-if="item.to"
            :to="`/topic/${item.to}`"
            class="flex w-full items-center py-1 px-3 font-medium text-gray-700 hover:bg-gray-200 gap-2 max-lg:hover:bg-slate-500 max-lg:text-2xl max-lg:text-gray-300"
          >
            <UserIcon class="stroke-gray-700 max-lg:stroke-gray-300" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </div>
        <ul v-if="item.isOpen && item.subMenu">
          <li @click="linkClick">
            <NuxtLink
              v-for="subItem in item.subMenu"
              :key="subItem.id"
              :to="`/topic/${item.to}-${subItem.to}`"
              class="flex w-full items-center py-1 pl-10 pr-3 font-medium text-gray-700 hover:bg-gray-100 gap-2 max-lg:hover:bg-slate-500 max-lg:text-xl max-lg:text-gray-300"
            >
              <UserIcon class="stroke-gray-700 max-lg:stroke-gray-300" />
              <span>{{ subItem.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import UserIcon from '../icons/UserIcon.vue'
import ArrowIcon from '../icons/ArrowIcon.vue'

export default {
  name: 'NuxtTopics',
  components: {
    UserIcon,
    ArrowIcon
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [
        {
          id: String,
          name: String,
          to: String,
          isOpen: Boolean,
          subMenu: () => [
            {
              id: String,
              to: String,
              name: Boolean
            }
          ]
        }
      ]
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    linkClick() {
      document.body.classList.remove('lock')
      this.$emit('close')
    },
    ...mapMutations({
      openCategory: 'topics/toggleTopic'
    })
  }
}
</script>
