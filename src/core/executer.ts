import { IStore, IActivatedRoute, IActivity, IDialogAction } from './interfaces'
import { findRoute } from './router'

export function storeExecuter<T>(
  store: IStore<T>,
  stateSlice: Pick<T, keyof T>,
  activatedRoute: IActivatedRoute
): IStore<T> {
  return { ...store, data: { ...store.data, ...stateSlice }, activatedRoute }
}

export function routeExecuter<T>(store: IStore<T>, activity: IActivity) {
  const active = store.activatedRoute
  const dialog = findRoute([...active.parent, active.path], store.routes)

  let res: IDialogAction<T> | undefined

  if (dialog)
    res = dialog(store.data, activity, { activatedRoute: active, routes: store.rawRoutes })

  if (res) {
    const { path, relativeTo } = res.navigateTo!
    const ar: IActivatedRoute = {
      path: path[path.length - 1],
      parent: [...path.slice(0, path.length - 1), ...(relativeTo || [])]
    }
    storeExecuter(store, res.data, ar)
  }
}