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
      },
      {
        message_id: 829063,
        text: 'DoraHacks, крупнейшая хакерская платформа в мире и партнёр The Open Network, опубликовала обзор  (https://dorahacks.io/blog/news/highlights-revealed-hack-a-tonx/)14 живых событий (https://dorahacks.io/blog/news/highlights-revealed-hack-a-tonx/), проходивших по всему миру в рамках глобального хакатона Hack-a-TON x DoraHacks с призовым фондом в $300 000.\r\n\r\nРанее мы публиковали собственные отчёты об этих событиях (Часть 1 (https://t.me/toncoin_rus/710) и часть 2 (https://t.me/toncoin_rus/733)), однако если вы хотите узнать больше о состоявшихся офлайн-сессиях и принять участие в следующем хакатоне, рекомендуем изучить опубликованный материал (https://dorahacks.io/blog/news/highlights-revealed-hack-a-tonx/)',
        cover_img_id: null,
        header: 'Обзор живых встреч Hack-a-TON x DoraHacks.',
        date: '2023-03-17T22:18:00',
        views: 9625,
        channel: {
          channel_id: -1001579620324,
          username: 'toncoin_rus',
          photo_id: 'fbdbe8f7-6caa-4c8b-a89c-aec3691ce700',
          cover_img_id: null,
          about:
            'TON – это блокчейн, спроектированный Telegram и поддерживаемый открытым сообществом. В TON доступны сверхбыстрые транзакции, низкие комиссии и удобные приложения, некоторые из которых можно найти непосредственно в Telegram: @wallet или @cryptobot. ton.org',
          title: 'TON Community RUS',
          subscribers: 330697,
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
