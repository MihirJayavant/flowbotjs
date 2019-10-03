import { IActivity } from './activity'
import { IActivatedRoute, IRoute } from './route'

export interface IConfig<T> {
  routes: IRoute<T>[]
  activatedRoute: IActivatedRoute
}

export interface IDialogAction<T> {
  message: string
  state: Pick<T, keyof T>
  navigateTo?: IActivatedRoute
}

export type dialogFn<T> = (activity: IActivity, state: T, config: IConfig<T>) => IDialogAction<T>
