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

test('forEach method runs through each point', () => {
  let pointListInput = PointList()
  pointListInput.add(2, 5)
  pointListInput.add(8, 3)
  pointListInput.add(1, 9)

  let pointListOutput = PointList()
  pointListInput.forEach((x, y) => {
    pointListOutput.add(x, y)
  })

  expect(pointListOutput.has(2, 5)).toBe(true)
  expect(pointListOutput.has(8, 3)).toBe(true)
  expect(pointListOutput.has(1, 9)).toBe(true)
})
