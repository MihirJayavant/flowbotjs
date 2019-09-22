import { simpleRoute, multiNonNestedRoute, simpleNestedRoute } from './mocks'
import { routeConverter, findRoute } from './router'

describe('[Unit Test] Router Testing', () => {
  it('should return defined object when simple non nested route is passed to routeConverter', () => {
    // Act
    const routeEnitity = routeConverter(simpleRoute)
    const value = routeEnitity['route1']
    // Assert
    expect(value).toBeDefined()
  })

  it('should return undefined object when simple non nested route is passed to routeConverter', () => {
    // Act
    const routeEnitity = routeConverter(simpleRoute)
    const value = routeEnitity['nothing']
    // Assert
    expect(value).toBeUndefined()
  })

  it('should return defined object when multi non nested route is passed to routeConverter', () => {
    // Act
    const routeEnitity = routeConverter(multiNonNestedRoute)
    const value1 = routeEnitity['route1']
    const value2 = routeEnitity['route2']
    // Assert
    expect(value1).toBeDefined()
    expect(value2).toBeDefined()
  })

  it('should return undefined object when multi non nested route is passed to routeConverter', () => {
    // Act
    const routeEnitity = routeConverter(multiNonNestedRoute)
    const value = routeEnitity['nothing']
    // Assert
    expect(value).toBeUndefined()
  })

  it('should return defined object when simple nested route is passed to routeConverter', () => {
    // Act
    const routeEnitity = routeConverter(simpleNestedRoute)
    let value = routeEnitity['route1']
    const child = value ? value.children : undefined
    value = child ? child['sub-route1'] : undefined
    // Assert
    expect(value).toBeDefined()
  })

  it('should return undefined object when simple nested route is passed to routeConverter', () => {
    // Act
    const routeEnitity = routeConverter(simpleNestedRoute)
    let value = routeEnitity['route1']
    const child = value ? value.children : undefined
    value = child ? child['nothing'] : undefined
    // Assert
    expect(value).toBeUndefined()
  })

  it('should return dialog function when simple non nested route is passed to findRoute', () => {
    // Act
    const routeEnitity = routeConverter(simpleRoute)
    const dialog = findRoute(['route1'], routeEnitity)
    // Assert
    expect(dialog).toBeDefined()
  })

  it('should return undefined when simple non nested route is passed to findRoute', () => {
    // Act
    const routeEnitity = routeConverter(simpleRoute)
    const dialog = findRoute(['route2'], routeEnitity)
    // Assert
    expect(dialog).toBeUndefined()
  })

  it('should return dialog function when multi non nested route is passed to findRoute', () => {
    // Act
    const routeEnitity = routeConverter(multiNonNestedRoute)
    const dialog = findRoute(['route2'], routeEnitity)
    // Assert
    expect(dialog).toBeDefined()
  })

  it('should return undefined when multi non nested route is passed to findRoute', () => {
    // Act
    const routeEnitity = routeConverter(multiNonNestedRoute)
    const dialog = findRoute(['route45'], routeEnitity)
    // Assert
    expect(dialog).toBeUndefined()
  })

  it('should return dialog function when simple nested route is passed to findRoute', () => {
    // Act
    const routeEnitity = routeConverter(simpleNestedRoute)
    const dialog = findRoute(['route1', 'sub-route1'], routeEnitity)
    // Assert
    expect(dialog).toBeDefined()
  })

  it('should return undefined when simple nested route is passed to findRoute', () => {
    // Act
    const routeEnitity = routeConverter(simpleNestedRoute)
    const dialog1 = findRoute(['sub-route1'], routeEnitity)
    const dialog2 = findRoute(['route1', 'sub-route45'], routeEnitity)
    // Assert
    expect(dialog1).toBeUndefined()
    expect(dialog2).toBeUndefined()
  })
})
