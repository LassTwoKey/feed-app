<template>
  <main class="flex flex-col gap-6">
    <p class="tg-text">User ID: {{ testId }}</p>
    <MessagesList :messages="messages" is-text-link hide-extra />
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import MessagesList from '~/components/Messages/MessagesList.vue'
import useTelegram from '~/hooks/useTelegram.js'

export default defineComponent({
  name: 'IndexPage',
  components: {
    MessagesList,
  },
  data() {
    return {
      messages: [],
      testId: 'Loading...',
    }
  },
  head() {
    return {
      title: 'TELESEO - Feed',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  async mounted() {
    const { userId } = useTelegram()
    this.testId = userId || 'error, not a web app'

    // const loadedPosts = await this.$axios
    //   .$get(`${this.$config.API_URL}/topics/index/posts`)
    //   .then((data: any) => data)

    // this.messages = loadedPosts
    //   .map((post: any) => ({
    //     id: post.message_id,
    //     header: post.header,
    //     toChannel: post.channel.channel_id,
    //     toPost: post.channel.message_id,
    //     coverImgId: post.cover_img_id,
    //     imgId: post.channel.photo_id,
    //     channel: post.channel.title,
    //     date: post.date,
    //     text: post.text,
    //     views: post.views
    //   }))
    //   .reverse()

    await 'test'
    this.messages = [
      {
        id: 11,
        header:
          'Возбудим и дадим: почему мы думаем, что агрессивный маркетинг и спам-рассылки — это эффективно',
        toChannel: 456546,
        coverImgId: 'f6404015-533d-4483-b2ac-b5da0e8b5400',
        imgId: '27c5e7b4-f327-4539-bfce-7755edd09700',
        channel: 'апитпат',
        date: '2023-03-23T22:51:58',
        text: 'https://yandex.com/ Мы в APIsender #homePayeer уже поднимали вопрос негатива https://mail.google.com/mail/u/0/#inbox/ &text=%27text.substr%27%20is%20deprecated&op=translate на рекламные месседжи в одной из статей. Сплошной хейт льётся в сторону подобных рассылок, но весь фокус в том, что всё это… эффективно работает. Сегодня вспомним похожий инструмент со спорной этичностью ― агрессивную рекламу.\r\n\r\nПочему агрессивный маркетинг эффективен? Принцип прост. В маркетинге принято отталкиваться от болей клиента, но ведь никто не запрещает давить на них — триггерить аудиторию, бесить и возбуждать её. Ведь люди запоминают то, что вызывает бурные эмоции. А негативные они или позитивные ― не так важно.\r\n\r\nТеперь даём вам секунду на «повспоминать» чудеса юродивой рекламы (ниже собрали живую классику). А пока поясним, как так агрессия и спам дают результат.',
        views: 323,
        entities: [
          {
            entity_type: 'hashtag',
            offset: 43,
            length: 11,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'url',
            offset: 0,
            length: 20,
            language: null,
            document_id: 5258476757123604992,
            url: null,
          },
          {
            entity_type: 'bold',
            offset: 142,
            length: 18,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'underline',
            offset: 70,
            length: 20,
            language: null,
            document_id: 5472146462362048818,
            url: null,
          },
        ],
      },
      {
        id: 74,
        header:
          'Зачем бизнесу корпоративная культура, и как она конвертируется в прибыль',
        toChannel: 456546,
        coverImgId: '4a82e246-4506-4d82-4fc2-cae2d68a7700',
        imgId: '27c5e7b4-f327-4539-bfce-7755edd09700',
        channel: 'апитпат',
        date: '2023-03-23T22:50:59',
        text: 'Привет, это Antro. «У нас есть печеньки» — пишут некоторые компании и ждут, когда к ним повалят сотрудники и клиенты. Рассказываем, как в действительности работает корпоративная культура, зачем её внедрять, и что это может принести. С пруфами и статистикой.',
        views: 233,
        entities: [
          {
            entity_type: 'hashtag',
            offset: 43,
            length: 11,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 139,
            length: 2,
            language: null,
            document_id: 5258476757123604992,
            url: null,
          },
          {
            entity_type: 'bold',
            offset: 142,
            length: 18,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 327,
            length: 2,
            language: null,
            document_id: 5472146462362048818,
            url: null,
          },
        ],
      },
      {
        id: 433,
        header: '«Юкка» — бесплатный сервер видеонаблюдения для дома и бизнеса',
        toChannel: 456546,
        coverImgId: '02414429-5c06-459a-27e5-3d0fef348f00',
        imgId: '27c5e7b4-f327-4539-bfce-7755edd09700',
        channel: 'апитпат',
        date: '2023-03-23T22:50:10',
        text: 'Я давно хотел написать статью и рассказать о софте, который мы разрабатываем, и, кажется, откладывать это сложное для меня дело уже нельзя. Я не мастер слова, так что прошу прощения за возможные ошибки или сложные обороты речи )',
        views: 12,
        entities: [
          {
            entity_type: 'hashtag',
            offset: 43,
            length: 11,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 139,
            length: 2,
            language: null,
            document_id: 5258476757123604992,
            url: null,
          },
          {
            entity_type: 'bold',
            offset: 142,
            length: 18,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 327,
            length: 2,
            language: null,
            document_id: 5472146462362048818,
            url: null,
          },
        ],
      },
      {
        id: 623,
        header: 'Уроки по JS',
        toChannel: 456546,
        coverImgId: 'b39d90ee-958c-48bd-95cf-82fd62e5b200',
        imgId: '27c5e7b4-f327-4539-bfce-7755edd09700',
        channel: 'апитпат',
        date: '2023-03-23T22:21:48',
        text: 'Всем привет!\r\n\r\nНаткнулся сегодня на интересную статью в блоге реакт, про то, над чем сейчас работает команда React.\r\n\r\nВ целом, очень много интересных вещей. Однако меня больше всего заинтересовал React Forget. \r\n\r\nОчень интересно, какой код он будет выдавать на выходе. Так как можно придумать много разных кейсов, когда “наивная” мемоизация не совсем подходит.\r\n\r\nВзять даже вот такой код:\r\n\r\n\r\nfunction getValue({a, b}) {\r\n    // ...\r\n}\r\n\r\nconst Component = ({object}) => {\r\n    const result = getValue(object)\r\n}\r\n\r\n\r\nОчевидный output здесь будет:\r\n\r\n\r\nfunction getValue({a, b}) {\r\n    // ...\r\n}\r\n\r\nconst Component = ({object}) => {\r\n    const result = useMemo(() => getValue(object), [object]);\r\n}\r\n\r\n\r\nХотя хочется видеть:\r\n\r\n\r\nfunction getValue({a, b}) {\r\n    // ...\r\n}\r\n\r\nconst Component = ({object}) => {\r\n    const result = useMemo(() => getValue({a: object.a, b: object.b}), [object.a, object.b]);\r\n}\r\n\r\n\r\nМожет оно так и будет работать на самом деле. Однако есть большие сомнения касательно прозрачности. \r\n\r\nНу и нету пока понимания, как в такой схеме различные хаки с ref будут работать. Кажется, что подобные трюки станут еще более неочевидными.\r\n\r\nВ общем, пока нету публичной реализации - сложно что-то понять на 100%.\r\n\r\nБуду рад услышать ваше мнение по поводу React Forget и других грядущих фич.\r\n\r\nhttps://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023',
        views: 776,
        entities: [
          {
            entity_type: 'hashtag',
            offset: 43,
            length: 11,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 139,
            length: 2,
            language: null,
            document_id: 5258476757123604992,
            url: null,
          },
          {
            entity_type: 'bold',
            offset: 142,
            length: 18,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 327,
            length: 2,
            language: null,
            document_id: 5472146462362048818,
            url: null,
          },
        ],
      },
      {
        id: 85745,
        header: 'Спецпроект: Как банды поделили vc.ru',
        toChannel: 456546,
        coverImgId: '72cd1bea-4ea4-4e68-7424-f299ddf32100',
        imgId: '27c5e7b4-f327-4539-bfce-7755edd09700',
        channel: 'апитпат',
        date: '2023-03-23T22:09:43',
        text: 'Я установил и допросил каждого из главарей организаций, что захватили пространство vc.ru: Комаровский, Марков, Черепанов, Молянов, Беговатов и других. Статья об их влиянии, новых авторах, настоящем и будущем проекта. А также шокирующее раскрытие личности Вадима Д.\r\nВсе мы читаем главную страницу в верхнем разделе редакции: новости редакции — это основа проекта vc.ru. Девчонки (и иногда мальчишки) делают большую работу, чтобы мы могли быть в курсе главных событий мира бизнеса и стартапов. Но кроме их деятельности на площадке есть довольно популярные авторы, чьи статьи создают большую активность и двигают сайт.\r\n\r\nИ если немного разобраться, можно заметить сформированные границы их информационного влияния. Я лично поговорил с каждым, и узнал мнения о проекте, друг о друге, и понял насколько они разные люди, но с примерно одинаковым видением одних и тех же проблем.\r\n\r\nСтавьте сердечко, если читаете кого-то из авторов, и мы отправляемся в путешествия по карте vc.ru:',
        views: 23467,
        entities: [
          {
            entity_type: 'hashtag',
            offset: 43,
            length: 11,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 139,
            length: 2,
            language: null,
            document_id: 5258476757123604992,
            url: null,
          },
          {
            entity_type: 'bold',
            offset: 142,
            length: 18,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 327,
            length: 2,
            language: null,
            document_id: 5472146462362048818,
            url: null,
          },
        ],
      },
      {
        id: 58713,
        header: '200 Level Status Codes',
        toChannel: 456546,
        coverImgId: null,
        imgId: '27c5e7b4-f327-4539-bfce-7755edd09700',
        channel: 'апитпат',
        date: '2023-03-17T19:49:50',
        text: "Every Important HTTP Status Code Explained\r\n\r\nJust by using the internet you have probably come across some HTTP status codes, such as the 404 status code, but that is just scraping the surface of possibilities. There are over 50 unique HTTP status codes across five different categories. Luckily, you don't need to know all of these or really even most of them. In this article I will be breaking down what each of the five sections are as well as the most important status codes from each of those sections. With this information you can confidently build robust APIs that return the proper HTTP status code which will make your API easier to use.\r\n\r\nThe first level of status codes is the 100 level and luckily none of these codes are really that common or important to understand. There are only a handful of codes in this section and none of them are applicable to normal web development/API development so we can skip this entire section.",
        views: 451,
        entities: [
          {
            entity_type: 'hashtag',
            offset: 43,
            length: 11,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 139,
            length: 2,
            language: null,
            document_id: 5258476757123604992,
            url: null,
          },
          {
            entity_type: 'bold',
            offset: 142,
            length: 18,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 327,
            length: 2,
            language: null,
            document_id: 5472146462362048818,
            url: null,
          },
        ],
      },
      {
        id: 894,
        header: 'Lorem Ipsum is simply dum',
        toChannel: 456546,
        coverImgId: null,
        imgId: '27c5e7b4-f327-4539-bfce-7755edd09700',
        channel: 'апитпат',
        date: '2023-03-17T18:08:47',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        views: 34534,
        entities: [
          {
            entity_type: 'hashtag',
            offset: 43,
            length: 11,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 139,
            length: 2,
            language: null,
            document_id: 5258476757123604992,
            url: null,
          },
          {
            entity_type: 'bold',
            offset: 142,
            length: 18,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 327,
            length: 2,
            language: null,
            document_id: 5472146462362048818,
            url: null,
          },
        ],
      },
      {
        id: 3568,
        header: 'Криптовалюта Лайткоин просела на 10%',
        toChannel: 456546,
        coverImgId: null,
        imgId: '27c5e7b4-f327-4539-bfce-7755edd09700',
        channel: 'апитпат',
        date: '2023-03-16T20:43:31',
        text: 'Investing.com - Криптовалюта Лайткоин в 18:34 (15:34 GMT) в средуторговалась по цене $78,700 по данным индекса Investing.com, опустившись на 10,20% в этот день. Это было самое значительное падение стоимости криптовалюты начиная с 9 ноября 2022 г..\r\n\r\nПадение спровоцировало также сокращение рыночной капитализации Лайткоин до $5,889B, или 0,54% от общей капитализации всех криптовалют. В то время как ранее на пиках капитализация Лайткоин составляла $25,609B.\r\n\r\nВ течение последних 24 часов Лайткоин  торговался в пределах от $78,700 до $85,400.\r\n\r\nЗа последние 7 дней криптовалюта Лайткоин ощущала падение курса в пределах потеряла 2,88%. Объем валюты Лайткоин, торгуемый в последние 24 часа до момента публикации данного материала, составлял $769,585M или 0,85% от общего объема всех криптовалют. Курс варьировался в промежутке от $65,1000 до $88,1000 в последние 7 дней.\r\n\r\nВ данный момент Лайткоин все еще ниже 81,26% от своих пиковых значений, составивших $420,00, которые были достигнуты 12 декабря 2017 г..',
        views: 666,
        entities: [
          {
            entity_type: 'hashtag',
            offset: 43,
            length: 11,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 139,
            length: 2,
            language: null,
            document_id: 5258476757123604992,
            url: null,
          },
          {
            entity_type: 'bold',
            offset: 142,
            length: 18,
            language: null,
            document_id: null,
            url: null,
          },
          {
            entity_type: 'custom-emoji',
            offset: 327,
            length: 2,
            language: null,
            document_id: 5472146462362048818,
            url: null,
          },
        ],
      },
    ]
  },
})
</script>
