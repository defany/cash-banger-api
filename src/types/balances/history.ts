export type BalancesHistoryReq = {
	limit?: number
	next_payment_id?: string
}

export type BalancesHistoryRes = {
	payments: [
		{
			id: string 
			sender_id: string
			receive_id: string
			currency: string
			amount: number
			payload?: string
		}
	],
	total: number 
	next_payment_id?: string
}