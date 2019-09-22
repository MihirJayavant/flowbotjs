import { IBotTemplate, IStore, IRoute, IActivatedRoute, IBot, IActivity, IActivityTemplate } from './interfaces'
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

  private store: IStore<T>

  constructor(botTemplate: IBotTemplate<T>) {
    this.name = botTemplate.name
    this.id = botTemplate.id
    this.store = botTemplate.store
  }

  setStore(store: IStore<T>) {
    this.store = store
  }

  sendMessage(activity: IActivity): IActivityTemplate {
    const dialog = routeExecutor(this.store)

    if (dialog) {
      const response = dialogExecutor(this.store, activity, dialog)
      const store = storeExecutor(this.store, response.state, response.navigateTo || this.store.startRoute)
      this.setStore(store)

      return { message: response.message }
    }
    // exception
    else {
      const { parent, path } = this.store.activatedRoute
      const route = parent.join('/') + '/' + path
      throw new DialogNotFound(route)
    }
  }
}

export function createBot<T>(template: IBotTemplate<T>): IBot {
  return new Bot(template)
}
