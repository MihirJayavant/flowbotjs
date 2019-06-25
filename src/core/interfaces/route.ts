import { dialogFn } from './dialog'

export interface IRoute<T> {
  path: string
  dialog?: dialogFn<T>
  children?: IRoute<T>[]
}

export interface IActivatedRoute {
  path: string
  parent: string[]
}

export interface IRouteEntity<T> {
  [key: string]:
  {
    dialog?: dialogFn<T>
    children?: IRouteEntity<T>
  }
  | undefined
}
