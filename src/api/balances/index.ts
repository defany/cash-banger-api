import { AxiosInstance } from 'axios'
import { UsersProfileReq, UsersProfileRes } from '../../types/users'
import { BalancesHistoryReq, BalancesHistoryRes } from '../../types/balances'

type BalancesApiParams = {
	requester: AxiosInstance
}

export class BalancesApi {
	private readonly balancesBaseEndpoint = '/balances/'

	private requester: AxiosInstance

	constructor({ requester }: BalancesApiParams) {
		this.requester = requester
	}

	async history(params?: BalancesHistoryReq): Promise<BalancesHistoryRes> {
		let url = this.balancesBaseEndpoint

		if (params?.limit) {
			url += `?limit=${params.limit}`
		}

		if (params?.next_payment_id) {
			url += `?next_payment_id=${params.next_payment_id}`
		}

		return this.requester.get(url)
	}
}