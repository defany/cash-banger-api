import { CashBangerApi } from "../src/api"


const main = async () => {
	const api = new CashBangerApi('cash.1234567.banger')

	const response = await api.users.byId({
		id: '123',
		is_extended: true
	})

	console.info(`user profile id = ${response.profile.id}`)

	console.info(`user profile balances`, response.balances)

	console.info('user profile clothes', response.clothes)
}

main()