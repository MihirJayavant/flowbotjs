import { IRoute, IActivatedRoute } from './route'

export interface IConfig<T> {
  routes: IRoute<T>
  activatedRoute: IActivatedRoute
}
