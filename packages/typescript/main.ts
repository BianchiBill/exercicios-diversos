import { formatString, highNumber, sumArray, person, Produto, successOrError, inverterArray, promiseAsyncAwait, getUserData } from './src/index'

(async () => {
  console.log('--- Exercício 1 ---')
  console.log(formatString('Bianchi', 38))
  console.log('-------------------\n')

  console.log('--- Exercício 2 - P1 ---')
  console.log(await highNumber(5, 3, 90, 6, 11))
  console.log('-------------------\n')

  console.log('--- Exercício 2 - P2 ---')
  console.log(await sumArray([1, 2, 3, 4]))

  console.log('--- Exercício 3 ---')
  console.log(await person({ nome: 'Bianchi', idade: 38 }))
  console.log('-------------------\n')

  console.log('--- Exercício 5 ---')
  const product = new Produto('Shinobu action figure', 699.99)
  console.log(product.consultPrice())
  console.log('-------------------\n')

  console.log('--- Exercício 5 ---')
  console.log(successOrError(false))
  console.log('-------------------\n')

  console.log('--- Exercício 6 ---')
  console.log('--- Invert numbers ---')
  console.log(inverterArray([1, 2, 3, 4, 5, 6, 7, 8]))
  console.log('--- Inverts Strings ---')
  console.log(inverterArray(['Stay', 'cool', 'my', 'friend']))
  console.log('-------------------\n')

  console.log('--- Exercício 7 ---')
  await promiseAsyncAwait()
  console.log('-------------------\n')

  console.log('--- Exercício 8 ---')
  console.log(await getUserData())
  console.log('-------------------\n')

})()
