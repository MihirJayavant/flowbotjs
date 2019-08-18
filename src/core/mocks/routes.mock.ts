import { IRoute, IActivity, IConfig, IDialogAction } from 'core/interfaces'

interface IState {
  data: string
}

function dialog1(state: IState, activity: IActivity, config: IConfig<IState>): IDialogAction<IState> {
  return { data: { data: '' } }
}

export const simpleRoute: IRoute<IState>[] = [{ path: 'route1', dialog: dialog1 }]

export const multiNonNestedRoute: IRoute<IState>[] = [
  { path: 'route1', dialog: dialog1 },
  { path: 'route2', dialog: dialog1 },
  { path: 'route3', dialog: dialog1 }
]

export const simpleNestedRoute: IRoute<IState>[] = [
  {
    path: 'route1', children: [
      { path: 'sub-route1', dialog: dialog1 },
      { path: 'sub-route2', dialog: dialog1 }
    ]
  }
]
