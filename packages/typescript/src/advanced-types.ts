type Resultado = {
  tipo: 'true',
  mensagem: 'Mensagem de sucesso'
} | {
  tipo: 'false',
  mensagem: 'Mensagem de Erro'
}

export const successOrError = (boo: boolean): Resultado => {
  if (boo) {
    return {
      tipo: 'true',
      mensagem: 'Mensagem de sucesso'
    }
  } else {
    return {
      tipo: 'false', mensagem: 'Mensagem de Erro'
    }
  }
}
