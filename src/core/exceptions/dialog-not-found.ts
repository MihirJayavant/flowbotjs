export class DialogNotFound extends Error {
	constructor(route: string, stackTrace?: string) {
		super(`Dialog not found on route ${route}`)
		this.name = 'DialogNotFound'
		this.stack = stackTrace
	}
}
