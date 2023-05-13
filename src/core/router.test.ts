import { simpleRoute, multiNonNestedRoute, simpleNestedRoute } from './mocks/index.ts'
import { routeConverter, findRoute } from './router.ts'
import { assertEquals, assertExists } from "https://deno.land/std@0.187.0/testing/asserts.ts";


Deno.test('should return defined object when simple non nested route is passed to routeConverter', () => {
  // Act
  const routeEnitity = routeConverter(simpleRoute)
  const value = routeEnitity['route1']
  // Assert
  assertExists(value)
})

Deno.test('should return undefined object when simple non nested route is passed to routeConverter', () => {
  // Act
  const routeEnitity = routeConverter(simpleRoute)
  const value = routeEnitity['nothing']
  // Assert
  assertEquals(value, undefined)
})

Deno.test('should return defined object when multi non nested route is passed to routeConverter', () => {
  // Act
  const routeEnitity = routeConverter(multiNonNestedRoute)
  const value1 = routeEnitity['route1']
  const value2 = routeEnitity['route2']
  // Assert
  assertExists(value1)
  assertExists(value2)
})

Deno.test('should return undefined object when multi non nested route is passed to routeConverter', () => {
  // Act
  const routeEnitity = routeConverter(multiNonNestedRoute)
  const value = routeEnitity['nothing']
  // Assert
  assertEquals(value, undefined)
})

Deno.test('should return defined object when simple nested route is passed to routeConverter', () => {
  // Act
  const routeEnitity = routeConverter(simpleNestedRoute)
  let value = routeEnitity['route1']
  const child = value ? value.children : undefined
  value = child ? child['sub-route1'] : undefined
  // Assert
  assertExists(value)
})

Deno.test('should return undefined object when simple nested route is passed to routeConverter', () => {
  // Act
  const routeEnitity = routeConverter(simpleNestedRoute)
  let value = routeEnitity['route1']
  const child = value ? value.children : undefined
  value = child ? child['nothing'] : undefined
  // Assert
  assertEquals(value, undefined)
})

Deno.test('should return dialog function when simple non nested route is passed to findRoute', () => {
  // Act
  const routeEnitity = routeConverter(simpleRoute)
  const dialog = findRoute(['route1'], routeEnitity)
  // Assert
  assertExists(dialog)
})

Deno.test('should return undefined when simple non nested route is passed to findRoute', () => {
  // Act
  const routeEnitity = routeConverter(simpleRoute)
  const dialog = findRoute(['route2'], routeEnitity)
  // Assert
  assertEquals(dialog, undefined)
})

Deno.test('should return dialog function when multi non nested route is passed to findRoute', () => {
  // Act
  const routeEnitity = routeConverter(multiNonNestedRoute)
  const dialog = findRoute(['route2'], routeEnitity)
  // Assert
  assertExists(dialog)
})

Deno.test('should return undefined when multi non nested route is passed to findRoute', () => {
  // Act
  const routeEnitity = routeConverter(multiNonNestedRoute)
  const dialog = findRoute(['route45'], routeEnitity)
  // Assert
  assertEquals(dialog, undefined)
})

Deno.test('should return dialog function when simple nested route is passed to findRoute', () => {
  // Act
  const routeEnitity = routeConverter(simpleNestedRoute)
  const dialog = findRoute(['route1', 'sub-route1'], routeEnitity)
  // Assert
  assertExists(dialog)
})

Deno.test('should return undefined when simple nested route is passed to findRoute', () => {
  // Act
  const routeEnitity = routeConverter(simpleNestedRoute)
  const dialog1 = findRoute(['sub-route1'], routeEnitity)
  const dialog2 = findRoute(['route1', 'sub-route45'], routeEnitity)
  // Assert
  assertEquals(dialog1, undefined)
  assertEquals(dialog2, undefined)
})

