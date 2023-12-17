export type UsersProfileReq = {
	id: string 
	is_extended?: boolean
}

export type UsersProfileRes = {
	profile: {
		id: string 
		nickname: string 
	}
	balances: [
		{
			currency: string 
			amount: number
		}
	]
	clothes?: [
		{
			id: string 
			name: string 
			image_url: string
		}
	]
}