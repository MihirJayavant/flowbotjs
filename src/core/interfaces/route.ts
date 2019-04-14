import { dialogFn } from './dialog'

export interface IRoute {
  path: string
  dialog?: dialogFn
  children?: IRoute[]
}

export interface IRouteEntity {
  [key: string]: {
    dialog?: dialogFn
    children?: IRouteEntity
  }
}
