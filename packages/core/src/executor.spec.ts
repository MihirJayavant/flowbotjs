import { storeExecutor } from './executor'
import { simpleStore } from './mocks'

describe('[Unit testing] Exector Testing', () => {
  it('should updated state in store', () => {
    // Act
    const result = storeExecutor(simpleStore, { data: 'bye' }, { parent: [], path: 'route1' })
    // Assert
    expect(result.state.data).toBe('bye')
  })
})
