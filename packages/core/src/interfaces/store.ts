import { IRoute, IActivatedRoute, IRouteEntity } from './route'

export interface IStore<T> {
  data: T
  rawRoutes: IRoute<T>
  routes: IRouteEntity<T>
  activatedRoute: IActivatedRoute
  startRoute: IActivatedRoute
}
