import { Topic } from '~/types/Topic'

export const state = () => ({
  topics: [
    // {
    //   name: 'Главная',
    //   slug: 'index',
    //   id: 1
    // },
    // {
    //   name: 'Новости',
    //   slug: 'news',
    //   id: 2
    // },
    // {
    //   name: 'Крипта',
    //   slug: 'crypto',
    //   id: 3
    // },
    // {
    //   name: 'Экономика',
    //   slug: 'economy',
    //   id: 4
    // }
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
          to: '/',
          name: 'GameFi'
        },
        {
          id: 'su2',
          to: '/',
          name: 'DeFi'
        },
        {
          id: 'su3',
          to: '/',
          name: 'Trading'
        },
        {
          id: 'su4',
          to: '/',
          name: 'News'
        }
      ]
    },
    {
      id: 'u2',
      to: '/',
      name: 'Startup'
    },
    {
      id: 'u3',
      name: 'Startup',
      isOpen: false,
      subMenu: [
        {
          id: 'su1',
          to: '/',
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
  setTopics(state: any, data: Topic) {
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
