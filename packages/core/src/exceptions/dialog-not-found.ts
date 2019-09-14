export class DialogNotFound extends Error {
  constructor(route: string) {
    super(`Dialog not found on route ${route}`)
    this.name = 'DialogNotFound'
  }
}
