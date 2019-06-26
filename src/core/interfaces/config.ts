import { IRouteEntity, IActivatedRoute } from './route'

export interface IConfig<T> {
  routes: IRouteEntity<T>
  activatedRoute: IActivatedRoute
}
