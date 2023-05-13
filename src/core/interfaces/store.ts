import { IRoute, IActivatedRoute, IRouteEntity } from './route.ts'

export interface IStore<T> {
  state: T
  rawRoutes: IRoute<T>[]
  routes: IRouteEntity<T>
  activatedRoute: IActivatedRoute
  startRoute: IActivatedRoute
}
