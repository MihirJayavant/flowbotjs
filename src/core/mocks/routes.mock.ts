import { IRoute } from 'core/interfaces'

export const simpleRoute: IRoute<string>[] = [{ path: 'route1' }]

export const multiNonNestedRoute: IRoute<string>[] = [
  { path: 'route1' },
  { path: 'route2' },
  { path: 'route3' }
]

export const simpleNestedRoute: IRoute<string>[] = [
  {
    path: 'route1', children: [
      { path: 'sub-route1' },
      { path: 'sub-route2' }
    ]
  }
]
