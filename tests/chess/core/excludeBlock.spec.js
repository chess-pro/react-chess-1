import { excludeBlock } from '~/chess/core'

// prettier-ignore
const snapshot1 = [
  'bRa8', 'bNb8', 'bBc8', 'bQd8', 'bKe8', 'bBf8', 'bNg8', 'bRh8',
  'bPa7', 'bPb7', 'bPc7', 'bPd7', 'bPe7', 'bPf7', 'bPg7', 'bPh7',
  'wPa2', 'wPb2', 'wPc2', 'wPd2', 'wPe2', 'wPf2', 'wPg2', 'wPh2',
  'wRa1', 'wNb1', 'wBc1', 'wQd1', 'wKe1', 'wBf1', 'wNg1', 'wRh1'
]

// prettier-ignore
const direction1 = {
  diagonal: [],
  horizontal: [
    [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1],
    [0, 1], [-1, 1], [-2, 1], [-3, 1], [-4, 1], [-5, 1], [-6, 1]
  ],
  vertical: [
    [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8],
    [1, 0], [1, -1], [1, -2], [1, -3], [1, -4], [1, -5], [1, -6]
  ]
}

describe('#excludeBlock', () => {
  it('exclude bloking path selected piece', () => {
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[1, 0]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[1, -1]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[1, -2]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[1, -3]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[1, -4]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[1, -5]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[1, -6]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[-1, 1]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[-2, 1]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[-3, 1]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[-4, 1]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[-5, 1]])
    )
    expect(excludeBlock('white', snapshot1, direction1)).toEqual(
      expect.arrayContaining([[-6, 1]])
    )
  })
})
