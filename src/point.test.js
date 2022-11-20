import Point from './point'

test('Create a point of (4, 5)', () => {
  let point = Point(4, 5)
  expect(point.getX()).toBe(4)
  expect(point.getY()).toBe(5)
})

test('Create a point of (7, 8)', () => {
  let point = Point(7, 8)
  expect(point.getX()).toBe(7)
  expect(point.getY()).toBe(8)
})
