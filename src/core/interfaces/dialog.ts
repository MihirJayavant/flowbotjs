import { IStore, IStoreAction } from './store'

export type dialogFn<T> = (store: Readonly<IStore<T>>) => IStoreAction<T>
