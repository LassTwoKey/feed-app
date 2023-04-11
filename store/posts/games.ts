export default {
  state: () => ({
    posts: [
      {
        message_id: 212,
        text: '📈 Цена биткоина протестировала (https://forklog.com/news/tsena-bitkoina-preodolela-uroven-27-000) уровень $27 000\r\n\r\n⚖️ Против YouTube-инфлюенсеров подали (https://forklog.com/news/protiv-youtube-inflyuenserov-podali-isk-za-prodvizhenie-ftx) иск за продвижение FTX. Менеджмент платформы отчитался, что экс-руководители получил (https://forklog.com/news/sem-benkman-frid-poluchil-2-2-mlrd-ot-ftx-i-alameda-research) $2,2 млрд от FTX и Alameda Research\r\n\r\n🔍 Связанный со взломом Euler Finance кошелек отправил (https://forklog.com/news/svyazannyj-so-vzlomom-euler-finance-koshelek-otpravil-100-eth-na-adres-lazarus-group) 100 ETH на адрес Lazarus Group\r\n\r\n📈 CEO Messari предсказал (https://forklog.com/news/ceo-messari-predskazal-rost-bitkoina-do-100-000) рост биткоина до $100 000\r\n\r\n🐕 NFT-сообщество разыграет (https://forklog.com/news/nft-soobshhestvo-razygraet-poezdku-v-yaponiyu-dlya-vstrechi-s-simvolom-dogecoin) поездку в Японию для встречи с символом Dogecoin\r\n\r\n💬 Глава BlackRock указал (https://forklog.com/news/glava-blackrock-ukazal-na-plyusy-tokenizatsii-dlya-rynkov-kapitala) на плюсы токенизации для рынков капитала\r\n\r\n⛔️ 21Shares откажется (https://forklog.com/news/21shares-otkazhetsya-ot-shesti-kripto-etp-iz-za-nizkogo-sprosa) от шести крипто-ETP из-за низкого спроса\r\n\r\n💸 Playboy отразил (https://forklog.com/news/playboy-otrazil-ubytok-v-4-9-mln-po-poluchennym-za-nft-kollektsiyu-ethereum) убыток в $4,9 млн по полученным за NFT-коллекцию Ethereum\r\n\r\n⚖️ SVB Financial Group подала (https://forklog.com/news/svb-financial-group-podala-zayavlenie-o-bankrotstve) заявление о банкротстве\r\n\r\n💰 Команда Flare начала распределять (https://forklog.com/news/komanda-flare-nachala-raspredelyat-tokeny-flr-na-summu-714-mln) токены FLR на сумму $714 млн\r\n\r\n📊 Трейдер назвал (https://forklog.com/news/trejder-nazval-usloviya-dlya-rosta-tseny-bitkoina) условия для роста цены биткоина\r\n\r\n#дайджест',
        cover_img_id: 'caaa80b1-4dae-4c2e-84a6-2fc94f17c300',
        header: '📈 Цена биткоина протестировала уровень $27 000',
        date: '2023-03-17T22:34:26',
        views: 7422,
        channel: {
          channel_id: -1001000499465,
          username: 'forklog',
          photo_id: '41396831-311b-42dd-9ad6-0fa88a910a00',
          cover_img_id: null,
          about:
            'Официальный канал культового журнала ForkLog. Все самое главное о криптовалютах и децентрализованных технологиях. @forklogfeed — все новости подряд.  Реклама на ForkLog: https://forklog.com/advertisement/ Сообщество в Discord - http://discord.gg/forklog',
          title: 'ForkLog',
          subscribers: 98473,
          date: '2023-03-17'
        }
      },
      {
        message_id: 123,
        text: 'Binance запускает 30-й проект на Binance Launchpad — Space ID (ID) . Продажа токенов для Space ID будет проходить в формате подписки на Launchpad с записью балансов пользователей BNB, начиная с 17 марта 2023 г., 00:00 (UTC). Подробности тут! (https://www.binance.com/en/support/announcement/introducing-the-space-id-id-token-sale-on-binance-launchpad-81e9da9067c847dfa3afd959e521c32a)👈\r\n\r\nРасчетный период владения BNB\r\n2023-03-17 03:00 (мск)\r\nПериод подписки\r\n2023-03-22 09:00 (мск)\r\nРасчетный период\r\n2023-03-22 12:00  (мск)\r\nОкончательное распределение токенов\r\n22.03.2023 11:00\r\n\r\nБеларусь в бане😆\r\n\r\nBinance регистрация (https://accounts.binance.com/ru/register?ref=ZGUBWILD) со скидкой 20% на комиссии',
        cover_img_id: 'e82427ee-e294-4bb1-4cf8-aa0185f2f400',
        header: 'Binance Launchpad - Space ID (ID)',
        date: '2023-03-17T22:12:35',
        views: 405,
        channel: {
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
