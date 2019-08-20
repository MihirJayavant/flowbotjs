import { IStore } from './store'
import { IActivity } from './activity'

export interface IBotTemplate<T> {
  name: string
  id: string
  store: IStore<T>
  onMessageReceive: (activity: IActivity) => void
}

export interface IBot {
  readonly name: string
  readonly id: string
  sendMessage: (activity: IActivity) => void
}
