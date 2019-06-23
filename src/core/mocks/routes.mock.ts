import { IRoute } from 'core/interfaces'

export const simpleRoute: IRoute<string>[] = [{ path: 'route1' }]

export const multiNonNestedRoute: IRoute<string>[] = [
  { path: 'route1' },
  { path: 'route2' },
  { path: 'route3' }
]
