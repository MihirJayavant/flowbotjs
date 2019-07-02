import { IStoreAction } from './store'
import { IActivity } from './activity'
import { IActivatedRoute, IRoute } from './route'

export interface IConfig<T> {
  routes: IRoute<T>
  activatedRoute: IActivatedRoute
}

export type dialogFn<T> = (state: T, activity: IActivity, config: IConfig<T>) => IStoreAction<T>
