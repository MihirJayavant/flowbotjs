import {
  dialogFn,
  IActivatedRoute,
  IActivity,
  IStore,
} from './interfaces/index.ts'
import { findRoute } from './router.ts'

export function storeExecutor<T>(
  store: IStore<T>,
  stateSlice: Partial<T>,
  activatedRoute: IActivatedRoute,
): IStore<T> {
  return {
    ...store,
    state: { ...store.state, ...stateSlice },
    activatedRoute,
  }
}

export function routeExecutor<T>(store: IStore<T>): dialogFn<T> | undefined {
  const active = store.activatedRoute
  return findRoute([...(active.parent || []), active.path], store.routes)
}

export function dialogExecutor<T>(
  store: IStore<T>,
  activity: IActivity,
  dialog: dialogFn<T>,
) {
  const { activatedRoute } = store
  const routes = store.rawRoutes

  const response = dialog({ activity, state: store.state, config: { activatedRoute, routes } })

  return response
}
