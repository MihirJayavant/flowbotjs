import { IStore } from './store'
import { IActivity } from './activity'

export interface IBotTemplate<T> {
  readonly name: string
  readonly id: string
  store: IStore<T>
  messageFromBot: (activity: IActivity) => void
  onStoreChange?: (store: IStore<T>) => void
}

export interface IBot {
  readonly name: string
  readonly id: string
  sendMessage: (activity: IActivity) => void
}
