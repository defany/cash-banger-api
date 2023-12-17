import { AxiosInstance } from 'axios'
import { UsersProfileReq, UsersProfileRes } from '../../types/users'

type UsersApiParams = {
	requester: AxiosInstance
}

export class UsersApi {
	private readonly usersBaseEndpoint = '/users/'

	private requester: AxiosInstance

	constructor({ requester }: UsersApiParams) {
		this.requester = requester
	}

	async byId(params: UsersProfileReq): Promise<UsersProfileRes> {
		let url = this.usersBaseEndpoint + params.id

		if (params.is_extended) {
			url += `?is_extended=${params.is_extended}`
		}

		return this.requester.get(url)
	}
}