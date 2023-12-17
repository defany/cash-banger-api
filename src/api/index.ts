import axios, { AxiosInstance } from 'axios'
import { UsersApi } from './users'
import { BalancesApi } from './balances'

const baseApiURL = 'https://api.cash-banger.com/'

export class CashBangerApi {
	private baseURL = baseApiURL

	private apiToken: string 
	
	private ax: AxiosInstance

	public users: UsersApi

	public balances: BalancesApi

	constructor(apiToken: string) {
		this.apiToken = apiToken
	
		this.ax = axios.create({
			baseURL: this.baseURL,
			timeout: 1000,
			headers: {
				'Authorizaion': this.apiToken
			}
		})

		this.users = new UsersApi({
			requester: this.ax
		})

		this.balances = new BalancesApi({
			requester: this.ax
		})
	}
}