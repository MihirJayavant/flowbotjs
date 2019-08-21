import { IStore, IActivatedRoute, IActivity, IDialogAction } from './interfaces'
import { findRoute } from './router'

export function storeExecuter<T>(store: IStore<T>,
  stateSlice: Pick<T, keyof T>,
  activatedRoute: IActivatedRoute
): IStore<T> {
  return {
    ...store,
    data: { ...store.data, ...stateSlice },
    activatedRoute
  }
}

export function routeExecuter<T>(store: IStore<T>, activity: IActivity): [IStore<T>, IDialogAction<T>] {
  const active = store.activatedRoute
  const dialog = findRoute([...active.parent, active.path], store.routes)

  if (!dialog) {
    throw new Error('No dialog found on route: ' + active)
  }

  const response = dialog(store.data, activity, { activatedRoute: active, routes: store.rawRoutes })
  const newStore = storeExecuter(store, response.state, response.navigateTo || store.startRoute)

  return [newStore, response]
}
