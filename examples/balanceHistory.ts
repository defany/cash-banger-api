import { CashBangerApi } from "../src/api"


const main = async () => {
	const api = new CashBangerApi('cash.12345.banger')

	const history = await api.balances.history()

	console.info('history', history.payments)
}

main()