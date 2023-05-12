import { storeExecutor, routeExecutor } from './executor'
import { simpleStore } from './mocks'

describe('[Unit testing] Executor Testing', () => {
  it('should update the state in store', () => {
    // Act
    const result = storeExecutor(simpleStore, { data: 'bye' }, { parent: [], path: 'route1' })
    // Assert
    expect(result.state.data).toBe('bye')
  })

  it('should return a dialog', () => {
    // Act
    const result = routeExecutor(simpleStore)
    // Assert
    expect(result).toBeDefined()
  })
})
