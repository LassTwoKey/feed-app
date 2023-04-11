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

export const formattedText = (text: string, isLinked?: boolean) => {
  if (!text) {
    return ''
  }

  const indentsInText = text.replace(/[\n]/g, '<br />')

  const textWords = indentsInText.split(' ')

  const textWordsArr = []

  for (const word of textWords) {
    if (word.length > 20) {
      textWordsArr.push(`<span class="break-all">${word}</span>`)
    } else {
      textWordsArr.push(word)
    }
  }

  const textWordsString = textWordsArr.join(' ')

  const linkRegex = /(https?:\/\/[^\s]+)/g

  let linkedText = ''
  if (isLinked) {
    linkedText = textWordsString.replace(linkRegex, `<a href="$1" class="textLink">$1</a>`)
  } else {
    linkedText = textWordsString.replace(linkRegex, `<span class="textLink">${linkRegex}</span>`)
  }

  // Find and replace hashtags
  const hashtagRegex = /#(\w+)/g
  const hashtaggedText = linkedText.replace(
    hashtagRegex,
    '<a href="https://t.me/$1" class="textLink">#$1</a>'
  )

  return hashtaggedText
}

export const formatNumber = (num: number) => {
  if (!num) {
    return 0
  }
  const formattedNumber = num.toLocaleString('en-US').replace(',', ' ')
  return formattedNumber
}

export const findMenuItemById = (menuItems: any[], id: string | number): any => {
  for (const item of menuItems) {
    if (item.id === id) {
      return item
    }
    if (item.subMenu) {
      const result = findMenuItemById(item.subMenu, id)
      if (result) {
        return result
      }
    }
  }
}
