import PointList from './pointList'

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

test('clone returns an identical pointList', () => {
  let pointListOriginal = PointList()
  pointListOriginal.add(5, 6)
  pointListOriginal.add(8, 3)
  pointListOriginal.add(2, 4)

  let pointListClone = pointListOriginal.clone()
  expect(pointListClone.has(5, 6)).toBe(true)
  expect(pointListClone.has(8, 3)).toBe(true)
  expect(pointListClone.has(2, 4)).toBe(true)

})

test(`cloned list doesn't reference the same as original`, () => {
  let pointListOriginal = PointList()
  let pointListClone = pointListOriginal.clone()

  let isSameReference = pointListOriginal === pointListClone

  expect(isSameReference).toBe(false)
})
