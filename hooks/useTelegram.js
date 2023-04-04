const useTelegram = () => {
	const tg = window.Telegram.WebApp

	return {
		tg,
		userId: tg.initDataUnsafe?.user?.id
	}
}

export default useTelegram