import { Topic } from '~/types/Topic'

export const state = () => ({
  topics: [
    {
      id: 'u0',
      to: '/',
      name: 'Главная'
    },
    {
      id: 'u1',
      name: 'Интересное',
      isOpen: false,
      subMenu: [
        {
          id: 'marketing',
          to: '/topic/marketing',
          name: 'Маркетинг'
        }
      ]
    },
    {
      id: 'new',
      name: 'Свежее',
      isOpen: false,
      subMenu: [
        {
          id: 'games',
          to: '/topic/games',
          name: 'Игры'
        }
      ]
    },
    {
      id: 'personal-experience',
      to: '/topic/personal-experience',
      name: 'Личный опыт'
    }
  ]
})

export const getters = {
  getTopics(state: any) {
    return state.topics
  }
}

export const mutations = {
  setTopics(state: any, data: Topic[]) {
    state.topics = data
  },
  toggleTopic(state: any, id: string) {
    state.topics = state.topics.map((topic: any) => {
      if (topic.id === id) {
        return {
          ...topic,
          isOpen: !topic.isOpen
        }
      } else {
        return { ...topic }
      }
    })
  }
}

export const actions = {}
