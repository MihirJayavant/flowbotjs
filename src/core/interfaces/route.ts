import { IActivity } from './activity.ts'

export interface IContext<T> {
  activity: IActivity,
  state: T,
  config: IConfig<T>
}

export interface IDialogAction<T> {
  message: string
  state?: Partial<T>
  navigateTo?: IActivatedRoute
}

export type dialogFn<T> = (context: IContext<T>) => IDialogAction<T> | Promise<IDialogAction<T>>

export interface IRoute<T> {
  path: string
  dialog?: dialogFn<T>
  children?: IRoute<T>[]
}

export interface IActivatedRoute {
  path: string
  parent?: string[]
}

export interface IRouteEntity<T> {
  [key: string]:
  | {
    dialog?: dialogFn<T>
    children?: IRouteEntity<T>
  }
  | undefined
}

export interface IConfig<T> {
  routes: IRoute<T>[]
  activatedRoute: IActivatedRoute
}

