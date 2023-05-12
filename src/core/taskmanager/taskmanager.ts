import { ITask } from './task'

export function scheduler<T>(queue: ITask<T>[], services: T) {
  while (queue.length > 0) {
    const task = queue[0]
    queue.splice(0, 1)
    task.execute(services)
  }
}

export interface ITaskManager<T> {
  schedule: (task: ITask<T>) => void
}

export class TaskManager<T> implements ITaskManager<T> {
  queue: ITask<T>[] = []

  constructor(private services: T) {}

  schedule() {
    throw Error('Not implemented')
  }
}
