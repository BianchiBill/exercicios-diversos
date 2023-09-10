export const promiseAsyncAwait = async (): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('O setTimeout trabalha com milissegundos, ou seja, para 3 segundos, precisamos passar 3000');
      resolve()
    }, 3000)
  })
}
