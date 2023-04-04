export const postDateFormat = (dateString: string) => {
  const postDate = new Date(dateString)

  const currentDate = new Date()

  const elapsedTime = currentDate.getTime() - postDate.getTime()

  const seconds = Math.floor(elapsedTime / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  let timeAgo: string
  const dateNameFirst = (num: number) => {
    return num === 1
  }
  const dateNameFromSecondToFifth = (num: number) => {
    return num >= 2 && num <= 4
  }

  if (days > 0) {
    if (dateNameFirst(days)) {
      timeAgo = `${days} день назад`
    } else if (dateNameFromSecondToFifth(days)) {
      timeAgo = `${days} дня назад`
    } else {
      timeAgo = `${days} дней назад`
    }
  } else if (hours > 0) {
    if (dateNameFirst(hours)) {
      timeAgo = `${hours} час назад`
    } else if (dateNameFromSecondToFifth(hours)) {
      timeAgo = `${hours} часа назад`
    } else {
      timeAgo = `${hours} часов назад`
    }
  } else if (minutes > 0) {
    if (dateNameFirst(minutes)) {
      timeAgo = `${minutes} минута назад`
    } else if (dateNameFromSecondToFifth(minutes)) {
      timeAgo = `${minutes} минуты назад`
    } else {
      timeAgo = `${minutes} минут назад`
    }
  } else {
    timeAgo = 'Только что'
  }
  return timeAgo
}

export const channelDate = (dateString: string) => {
  const dateOfCreation = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }

  const formattedDate = dateOfCreation.toLocaleString('ru-RU', options)

  return formattedDate
}
