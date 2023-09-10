const arrayEx: number[] = [1, 2, 3, 4, 5]

export const sumArray = async (nums: number[]): Promise<number> => {
  let sum: number = 0
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i]
  }
  return sum
}

export const highNumber = async (...nums: number[]): Promise<number> => {
  let highNum: number = 0
  nums.forEach((num) => {
    if (num > highNum) highNum = num
  })
  return highNum
}
