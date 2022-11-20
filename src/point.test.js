import { Point, PointList } from './point'

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

test('Point list has() returns TRUE for added point', () => {
  let pointList = PointList()
  pointList.add(3, 5)
  expect(pointList.has(3, 5)).toBe(true)
})

test('Point list has() returns FALSE for nonexistent point', () => {
  let pointList = PointList()
  expect(pointList.has(7, 8)).toBe(false)
})
