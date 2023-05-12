import { IBotTemplate, IStore, IRoute, IActivatedRoute, IBot, IActivity } from './interfaces'
import { routeConverter } from './router'
import { dialogExecutor, routeExecutor, storeExecutor } from './executor'
import { DialogNotFound } from './exceptions'

export function createStore<T>(state: T, route: IRoute<T>[], startRoute: IActivatedRoute): IStore<T> {
  return {
    state,
    startRoute,
    activatedRoute: startRoute,
    rawRoutes: route,
    routes: routeConverter(route)
  }
}

class Bot<T> implements IBot {
  readonly name: string
  readonly id: string

  private readonly messageFromBot: (activity: IActivity) => void
  private readonly onStoreChange?: (store: IStore<T>) => void
  private readonly onError?: (error: Error) => void

  private store: IStore<T>

  constructor(botTemplate: IBotTemplate<T>) {
    this.name = botTemplate.name
    this.id = botTemplate.id
    this.store = botTemplate.store
    this.messageFromBot = botTemplate.messageFromBot
    this.onStoreChange = botTemplate.onStoreChange
    this.onError = botTemplate.onError
  }

  setStore(store: IStore<T>) {
    this.store = store
  }

  async sendMessage(activity: IActivity): Promise<void> {
    const dialog = routeExecutor(this.store)
    try {
      if (dialog) {
        const response = await dialogExecutor(this.store, activity, dialog)

        const store = storeExecutor(this.store, response.state || {}, response.navigateTo || this.store.startRoute)
        this.setStore(store)

        if (this.onStoreChange) this.onStoreChange(store)

        this.messageFromBot({ message: response.message })
      }
      // exception
      else {
        const { parent, path } = this.store.activatedRoute
        const route = (parent || []).join('/') + '/' + path
        throw new DialogNotFound(route)
      }
    } catch (error) {
      if (this.onError) this.onError(error)
    }
  }
}

export function createBot<T>(template: IBotTemplate<T>): IBot {
  return new Bot(template)
}
