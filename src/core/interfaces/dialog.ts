import { IStoreAction } from './store'
import { IActivity } from './activity'
import { IConfig } from './config'

export type dialogFn<T> = (state: T, activity: IActivity, config: IConfig<T>) => IStoreAction<T>
