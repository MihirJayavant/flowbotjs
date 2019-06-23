import { IRoute, IActivatedRoute } from './route'

export interface IStore<T> {
  data: T
  routes: IRoute<T>
  activatedRoute: IActivatedRoute
}

export interface IStoreAction<T> {
  data: Pick<T, keyof T>
  navigateTo?: { path: string[]; relativeTo?: string[] }
}
