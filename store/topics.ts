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
      name: 'Crypto',
      isOpen: false,
      subMenu: [
        {
          id: 'su1',
          to: '/topic/Crypto-GameFi',
          name: 'GameFi'
        },
        {
          id: 'su2',
          to: '/topic/Crypto-DeFi',
          name: 'DeFi'
        },
        {
          id: 'su3',
          to: '/topic/Crypto-Trading',
          name: 'Trading'
        },
        {
          id: 'su4',
          to: '/topic/Crypto-News',
          name: 'News'
        }
      ]
    },
    {
      id: 'u2',
      to: '/topic/Startup',
      name: 'Startup'
    },
    {
      id: 'u3',
      name: 'Startup',
      isOpen: false,
      subMenu: [
        {
          id: 'su1',
          to: '/topic/Startup-GameFi',
          name: 'GameFi'
        }
      ]
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
