import { IStore } from './store.ts'
import { IActivity } from './activity.ts'

export interface IBotTemplate<T> {
	readonly name: string
	readonly id: string
	store: IStore<T>
	messageFromBot: (activity: IActivity) => void
	onStoreChange?: (store: IStore<T>) => void
	onError?: (error: Error) => void
}

export interface IBot {
	readonly name: string
	readonly id: string
	sendMessage: (activity: IActivity) => void
}
