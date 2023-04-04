export const isMaxLength = (str: string, length: number) => {
  return str.length < length
}

export const isLink = (str: string) => {
  const linkRegex = /(https?:\/\/[^\s]+|@\w+|#\S+)/g
  return linkRegex.test(str)
}

export const cutString = (str: string, length: number) => {
  return length > str.length ? str : `${str.slice(0, length)}…`
}

export const setCloudfareLink = (id: string, variant: string) => {
  return `https://imagedelivery.net/pG6XD80Cie3F9jOvwRfTxg/${id}/${variant}`
}

export const formatNumber = (num: number) => {
  if (!num) {
    return 0
  }
  const formattedNumber = num.toLocaleString('en-US').replace(',', ' ')
  return formattedNumber
}

export const formattedText = (text: string, highlight?: boolean, entities?: any) => {
  if (!text) {
    return ''
  }

  if (!entities) {
    return text
  }

  let initText = text

  const selectedEntities = []

  for (let i = 0; i < entities.length; i++) {
    const entity = entities[i]
    selectedEntities.push({
      text: text.substr(entity.offset, entity.length),
      type: entity.entity_type
    })
  }

  // Entity types
  for (let i = 0; i < selectedEntities.length; i++) {
    const selEntity = selectedEntities[i]
    if (selEntity.type === 'bold') {
      initText = initText.replace(selEntity.text, `<b>${selEntity.text}</b>`)
    }
    if (selEntity.type === 'italic') {
      initText = initText.replace(selEntity.text, `<i>${selEntity.text}</i>`)
    }
    if (selEntity.type === 'code') {
      initText = initText.replace(selEntity.text, `<code>${selEntity.text}</code>`)
    }
    if (selEntity.type === 'strike') {
      initText = initText.replace(selEntity.text, `<s>${selEntity.text}</s>`)
    }
    if (selEntity.type === 'underline') {
      initText = initText.replace(selEntity.text, `<u>${selEntity.text}</u>`)
    }
    if (selEntity.type === 'url') {
      // const linkRegex = /(https?:\/\/[^\s]+)/g
      // if (highlight) {
      //   initText = initText.replace(linkRegex, `<a href="$1" class="textLink">$1</a>`)
      // } else {
      //   initText = initText.replace(linkRegex, `<a class="textLink">$1</a>`)
      // }
      if (highlight) {
        initText = initText.replace(
          selEntity.text,
          `<a href="${selEntity.text}" class="textLink">${selEntity.text}</a>`
        )
      } else {
        initText = initText.replace(selEntity.text, `<a class="textLink">${selEntity.text}</a>`)
      }
    }
  }

  initText = initText.replace(/[\n]/g, '<br>')

  // safe wrap
  const textWords = initText.split(' ')

  const textWordsArr = []

  for (const word of textWords) {
    if (word.length > 25) {
      textWordsArr.push(`<span class="break-all">${word}</span>`)
    } else {
      textWordsArr.push(word)
    }
  }

  initText = textWordsArr.join(' ')

  return initText
}
