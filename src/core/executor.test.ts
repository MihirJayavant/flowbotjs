import { routeExecutor, storeExecutor } from './executor.ts'
import { simpleStore } from './mocks/index.ts'
import {
	assertEquals,
	assertExists,
} from 'https://deno.land/std@0.187.0/testing/asserts.ts'

Deno.test('should update the state in store', () => {
	// Act
	const result = storeExecutor(simpleStore, { data: 'bye' }, {
		parent: [],
		path: 'route1',
	})
	// Assert
	assertEquals(result.state.data, 'bye')
})

Deno.test('should return a dialog', () => {
	// Act
	const result = routeExecutor(simpleStore)
	// Assert
	assertExists(result)
})
