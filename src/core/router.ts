import { dialogFn, IRoute, IRouteEntity } from './interfaces/index.ts'

export function routeConverter<T>(routes: IRoute<T>[]): IRouteEntity<T> {
	const entity: IRouteEntity<T> = {}
	for (const route of routes) {
		entity[route.path] = {
			dialog: route.dialog,
			children: route.children
				? routeConverter(route.children)
				: undefined,
		}
	}

	return entity
}

export function findRoute<T>(
	path: string[],
	route: IRouteEntity<T>,
): dialogFn<T> | undefined {
	let tempRoute = route
	let count = 0

	while (count < path.length) {
		const r = tempRoute[path[count]]

		if (r) {
			if (count === path.length - 1) {
				return r.dialog
			} else if (r.children) {
				tempRoute = r.children
			} else {
				return undefined
			}
		} else return undefined

		count++
	}

	return undefined
}
