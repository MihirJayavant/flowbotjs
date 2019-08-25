import { IBotTemplate, IStore, IRoute, IActivatedRoute, IBot, IActivity } from './interfaces'
import { routeConverter } from 'router'

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

  sendMessage(activity: IActivity) {
    throw new Error('Not Implemented')
  }
}

export function createBot<T>(template: IBotTemplate<T>): IBot {
  return new Bot(template)
}
