import { simpleRoute, multiNonNestedRoute } from '../core/mocks'
import { routeConverter } from './router'

describe('[Unit Test] Router Testing', () => {
  it('should return defined object when simple non nested route is passed to routeConverter', () => {
    const routeEnitity = routeConverter(simpleRoute)
    const value = routeEnitity['route1']
    expect(value).toBeDefined()
  })

  it('should return undefined object when simple non nested route is passed to routeConverter', () => {
    const routeEnitity = routeConverter(simpleRoute)
    const value = routeEnitity['nothing']
    expect(value).toBeUndefined()
  })

  it('should return defined object when multi non nested route is passed to routeConverter', () => {
    const routeEnitity = routeConverter(multiNonNestedRoute)
    const value1 = routeEnitity['route1']
    const value2 = routeEnitity['route2']
    expect(value1).toBeDefined()
    expect(value2).toBeDefined()
  })
  it('should return undefined object when multi non nested route is passed to routeConverter', () => {
    const routeEnitity = routeConverter(multiNonNestedRoute)
    const value = routeEnitity['nothing']
    expect(value).toBeUndefined()
  })
})
