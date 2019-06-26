import { IStore, IActivatedRoute, IActivity, IStoreAction } from './interfaces'
import { findRoute } from './router';

export function storeExecuter<T>(store: IStore<T>, stateSlice: Pick<T, keyof T>, activatedRoute: IActivatedRoute): IStore<T> {
  return { ...store, data: { ...store.data, ...stateSlice }, activatedRoute }
}

export function routeExecuter<T>(store: IStore<T>, activity: IActivity) {
  const active = store.activatedRoute
  const dialog = findRoute([...active.parent, active.path], store.routes)

  let res: IStoreAction<T> | undefined

  if (dialog)
    res = dialog(store.data, activity, { activatedRoute: active, routes: store.routes })
}
