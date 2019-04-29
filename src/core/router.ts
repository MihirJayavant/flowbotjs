import { IRoute, IRouteEntity } from './interfaces'
import { dialogFn } from './interfaces/dialog'

export function routeConverter<T>(routes: IRoute<T>[]): IRouteEntity<T> {
  const entity: IRouteEntity<T> = {}
  for (const route of routes) {
    entity[route.path] = {
      dialog: route.dialog,
      children: !!route.children ? routeConverter(route.children) : undefined
    }
  }

  return entity
}

export function findRoute<T>(path: string[], route: IRouteEntity<T>): dialogFn<T> | undefined {
  let dialog: dialogFn<T> | undefined = undefined
  let tempRoute = route
  for (const p in path) {
    const r = tempRoute[p]
    if (!!r) {
      dialog = r.dialog
      if (r.children) tempRoute = r.children
      else break
    } else break
  }

  return dialog
}
