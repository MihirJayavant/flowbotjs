import { IStore } from '../interfaces'
import { simpleRoute, dialog1 } from './routes.mock'

interface ISimpleState {
  data: string
}

const simpleState = {
  data: 'Hello'
}

export const simpleStore: IStore<ISimpleState> = {
  rawRoutes: simpleRoute,
  routes: { route1: { dialog: dialog1 } },
  state: simpleState,
  activatedRoute: { parent: [], path: 'route1' },
  startRoute: { parent: [], path: 'route1' }
}
