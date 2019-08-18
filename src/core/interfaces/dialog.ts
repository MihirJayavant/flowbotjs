import { IActivity } from './activity'
import { IActivatedRoute, IRoute } from './route'

export interface IConfig<T> {
  routes: IRoute<T>
  activatedRoute: IActivatedRoute
}

export interface IDialogAction<T> {
  data: Pick<T, keyof T>
  navigateTo?: { path: string[]; relativeTo?: string[] }
}

export type dialogFn<T> = (state: T, activity: IActivity, config: IConfig<T>) => IDialogAction<T>
