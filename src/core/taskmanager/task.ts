export interface ITask<T> {
  execute: (services: T) => Promise<void>
}
