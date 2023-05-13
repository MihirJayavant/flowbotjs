import { IRoute, IDialogAction } from '../interfaces/index.ts'

interface IState {
  data: string
}

export function dialog1(): IDialogAction<IState> {
  return { state: { data: '' }, message: '' }
}

export const simpleRoute: IRoute<IState>[] = [{ path: 'route1', dialog: dialog1 }]

export const multiNonNestedRoute: IRoute<IState>[] = [
  { path: 'route1', dialog: dialog1 },
  { path: 'route2', dialog: dialog1 },
  { path: 'route3', dialog: dialog1 }
]

export const simpleNestedRoute: IRoute<IState>[] = [
  {
    path: 'route1',
    children: [
      { path: 'sub-route1', dialog: dialog1 },
      { path: 'sub-route2', dialog: dialog1 }
    ]
  }
]
