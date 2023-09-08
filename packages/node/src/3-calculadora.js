export const constCalculator = async (numberOne, operator, numberTwo) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    case '/':
      if (numberTwo === 0) {
        return numberOne / numberTwo;
      }
      return 'Erro: Divisão por zero.';
    default:
      return 'Operador invalido';
  }
};

export async function funcCalculator(numberOne, operator, numberTwo) {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    case '/':
      if (numberTwo === 0) {
        return numberOne / numberTwo;
      }
      return 'Erro: Divisão por zero.';
    default:
      return 'Operador invalido';
  }
}
