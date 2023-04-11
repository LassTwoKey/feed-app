import { Channel } from '~/types/Channel'

export const state = () => ({
  channels: [
    {
      channel_id: -1001479224822,
      username: 'evtublog',
      photo_id: '8e9c3b40-74ec-4da8-4b70-b84f84c66000',
      cover_img_id: null,
      about: 'Создаю первую метавселенную в дополненной реальности @trace_ru',
      title: 'Bogdan Evtushenko',
      subscribers: 0,
      date: '2023-03-17'
    },
    {
      channel_id: -1001579620324,
      username: 'toncoin_rus',
      photo_id: 'fbdbe8f7-6caa-4c8b-a89c-aec3691ce700',
      cover_img_id: null,
      about:
        'TON – это блокчейн, спроектированный Telegram и поддерживаемый открытым сообществом. В TON доступны сверхбыстрые транзакции, низкие комиссии и удобные приложения, некоторые из которых можно найти непосредственно в Telegram: @wallet или @cryptobot. ton.org',
      title: 'TON Community RUS',
      subscribers: 330697,
      date: '2023-03-17'
    },
    {
      channel_id: -1001387303841,
      username: 'gusevself',
      photo_id: 'a7f9e7bd-db21-457c-5a12-a199d236a000',
      cover_img_id: null,
      about:
        '⚡️ В крипте с 2016 и TON с 2021  🔥 Трейдер: анализ рынка, инсайды  💻 Строю бизнес, пишу про развитие   Реклама @CryptoGusev   English @gusevlife  Бот @TegroTONbot   https://youtube.com/@GUSEVLIVE  https://vk.com/btc.bitcoin  https://twitter.com/gusevlife',
      title: 'Святослав Гусев',
      subscribers: 34201,
      date: '2023-03-17'
    },
    {
      channel_id: -1001796138587,
      username: 'crypto_polygon',
      photo_id: 'a1d1ba84-9996-4689-97f0-10a27f028500',
      cover_img_id: null,
      about:
        'Центр интеграции государства и криптоиндустрии   Администратор - @crypto_polygon_admin   Наш чат - https://t.me/+BWxnCVpxp7hhZmYy',
      title: 'Криптополигон',
      subscribers: 1240,
      date: '2023-03-17'
    },
    {
      channel_id: -1001000499465,
      username: 'forklog',
      photo_id: '41396831-311b-42dd-9ad6-0fa88a910a00',
      cover_img_id: null,
      about:
        'Официальный канал культового журнала ForkLog. Все самое главное о криптовалютах и децентрализованных технологиях. @forklogfeed — все новости подряд.  Реклама на ForkLog: https://forklog.com/advertisement/ Сообщество в Discord - http://discord.gg/forklog',
      title: 'ForkLog',
      subscribers: 98473,
      date: '2023-03-17'
    },
    {
      channel_id: -1001490737979,
      username: 'cryptohodlnew',
      photo_id: '0db2fe8a-50af-4807-f828-47a318fc4d00',
      cover_img_id: null,
      about:
        'В крипте с 2017 года! Здесь мы публикуем актуальные новости и торговые решения!  Чат - https://t.me/Cryptohodlchat YouTube - https://youtube.com/channel/UCNiMta4AL2lwHg3yIz87xMw  По вопросам сотрудничества - @den3master',
      title: 'Cryptohodl News',
      subscribers: 2365,
      date: '2022-02-01'
    }
  ]
})

export const getters = {
  getChannels(state: any) {
    return state.channels
  }
}

export const mutations = {
  setChannels(state: any, data: Channel[]) {
    state.channels = data
  }
}

export const actions = {}
