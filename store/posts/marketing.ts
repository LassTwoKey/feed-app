export default {
  state: () => ({
    posts: [
      {
        message_id: 829061,
        text: 'Бескассовые магазины Amazon Go обвинили в нарушениях правил города Нью-Йорк об информирования покупателей о сборе биометрических идентификаторов.\r\n\r\nСоответствующий закон приняли в 2021 году. Согласно документу, учреждения, записывающие биометрические данные посетителей, должны разместить информационные таблички на видном месте.\r\n\r\nВ коллективном иске к техгиганту указано, что в магазине Amazon Go на Пайн-стрит не было заметной вывески в соответствии с законом. Заявитель Родригес Перс утверждает, что 7 февраля 2023 года отправил письмо в компанию и отметил отсутствие информирования.',
        cover_img_id: null,
        header:
          'Amazon Go обвинили (https://forklog.com/news/ai/amazon-go-obvinili-v-nezakonnoj-biometricheskoj-slezhke) в незаконной биометрической слежке',
        date: '2023-03-17T22:14:41',
        views: 203,
        channel: {
          channel_id: -1001479224822,
          username: 'evtublog',
          photo_id: '8e9c3b40-74ec-4da8-4b70-b84f84c66000',
          cover_img_id: null,
          about: 'Создаю первую метавселенную в дополненной реальности @trace_ru',
          title: 'Bogdan Evtushenko',
          subscribers: 0,
          date: '2023-03-17'
        }
      }
    ]
  }),
  getters: {
    getState(state: any) {
      return state.posts
    }
  },
  mutations: {},
  actions: {}
}
