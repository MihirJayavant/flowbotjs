import { IRoute, IActivatedRoute, IRouteEntity } from './route'

export interface IStore<T> {
  data: T
  rawRoutes: IRoute<T>
  routes: IRouteEntity<T>
  activatedRoute: IActivatedRoute
}

export interface IStoreAction<T> {
  data: Pick<T, keyof T>
  navigateTo?: { path: string[]; relativeTo?: string[] }
}
