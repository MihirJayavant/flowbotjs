import { IStore, IActivatedRoute, IActivity, dialogFn } from './interfaces'
import { findRoute } from './router'

export function storeExecutor<T>(
  store: IStore<T>,
  stateSlice: Pick<T, keyof T>,
  activatedRoute: IActivatedRoute
): IStore<T> {
  return {
    ...store,
    state: { ...store.state, ...stateSlice },
    activatedRoute
  }
}

export function routeExecutor<T>(store: IStore<T>) {
  const active = store.activatedRoute
  return findRoute([...active.parent, active.path], store.routes)
}

export function dialogExecutor<T>(store: IStore<T>, activity: IActivity, dialog: dialogFn<T>) {
  const { activatedRoute } = store
  const routes = store.rawRoutes

  const response = dialog(store.state, activity, { activatedRoute, routes })
  // const newStore = storeExecutor(store, response.state, response.navigateTo || store.startRoute)

  return response
}
