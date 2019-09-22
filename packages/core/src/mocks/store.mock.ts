import { IStore } from '../interfaces'
import { simpleRoute } from './routes.mock'

interface ISimpleState {
  data: string
}

const simpleState = {
  data: 'Hello'
}

export const simpleStore: IStore<ISimpleState> = {
  rawRoutes: simpleRoute,
  routes: {},
  state: simpleState,
  activatedRoute: { parent: [], path: 'route1' },
  startRoute: { parent: [], path: 'route1' }
}
