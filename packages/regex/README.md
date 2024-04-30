# **Abaixo exercicios de Regex**

### As expressões que podem ser usadas estão aqui para visualizar, porém aconselho que tente encontrar as respostas sozinho.

### Se sua resposta estiver diferente mas o resultado é o que precisamos, também não tem problema, muitas vezes, expressões diferentes podem obter o mesmo resultado.

#### Por exemplo

```javascript
const regex1 = /\d+/gim;
const regex2 = /[0-9]+/gim;

const num1 = "Tenho um teste com varios numeros, 1234567, e tbm 098765, e pra finalizar 4545";

console.log(num1.match(regex1));
console.log(num1.match(regex2));
```

#### Resultado

```
[ '1234567', '098765', '4545' ]

[ '1234567', '098765', '4545' ]
```

# Exercícios Fáceis de Regex:

### Descrição:

Dada uma string str, escreva uma expressão regular para encontrar todas as ocorrências da palavra "gato".

String de Exemplo:

```javascript
const str = "O gato é um animal doméstico. O gato mia durante a noite.";
```

Caso tenha duvida, pode ver a regex abaixo.

<details>
<summary>Expressão Regular</summary>
/gato/gi
</details>

### Descrição:

Dada uma string str, escreva uma expressão regular para encontrar todas as ocorrências de números.String de Exemplo:

```javascript
const str = "A idade do gato é 4 anos e a do cachorro é 6 anos.";
```

Caso tenha duvida, pode ver a regex abaixo.

<details>
<summary>Expressão Regular</summary>
/\d+/g
</details>

### Descrição:

Dada uma string str, escreva uma expressão regular para encontrar todas as ocorrências de letras maiúsculas.String de Exemplo:

```javascript
const str = "O GATO É UM ANIMAL DOMÉSTICO.";
```

Caso tenha duvida, pode ver a regex abaixo.

<details>
<summary>Expressão Regular</summary>
/[A-Z]/g
</details>
<br>

---

# Exercícios Intermediários de Regex:

### Descrição:

Dada uma string str, escreva uma expressão regular para encontrar todas as palavras que começam com a letra "a" seguida por qualquer número de letras "b" e terminam com a letra "c".String de Exemplo:

```javascript
const str = "abc abbc abbbc abbbbc aabbcc aabbbcc aabbbbcc aabbbccc";
```

<details>
<summary>Expressão Regular</summary>
/\bab+c\b/gi
</details>

### Descrição:

Dada uma string str, escreva uma expressão regular para encontrar todas as ocorrências de endereços de e-mail.String de Exemplo:

```javascript
const str = "Meu e-mail é exemplo@gmail.com e o outro é teste@yahoo.com.";
```

<details>
<summary>Expressão Regular</summary>
/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g
</details>

### Descrição:

Dada uma string str, escreva uma expressão regular para encontrar todas as palavras que contenham apenas vogais.String de Exemplo:

```javascript
const str = "O rato roeu a roupa do rei de Roma.";
```

<details>
<summary>Expressão Regular</summary>
/\b[aeiou]+\b/gi
</details>
<br>

---

# Exercícios Difíceis de Regex:

### Descrição:

Dada uma string str, escreva uma expressão regular para encontrar todas as ocorrências de datas no formato "DD/MM/YYYY".String de Exemplo:
javascript

```javascript
const str = "As datas são 31/12/2023, 15/06/2024 e 05/09/2025.";
```

<details>
<summary>Expressão Regular</summary>
/\b(0?[1-9]|[12]\d|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}\b/g
</details>

### Descrição:

Dada uma string str, escreva uma expressão regular para encontrar todas as ocorrências de palavras que contenham exatamente três letras.String de Exemplo:
javascript

```javascript
const str = "O gato mia, o cachorro late e o pássaro canta.";
```

<details>
<summary>Expressão Regular</summary>
/\b[A-Za-z]{3}\b/g
</details>

### Descrição:

Dada uma string str, escreva uma expressão regular para encontrar todas as ocorrências de números de telefone no formato "(XXX) XXXX-XXXX".String de Exemplo:
javascript

```javascript
const str = "Os números de telefone são (123) 4567-8901 e (987) 6543-2109.";
```

<details>
<summary>Expressão Regular</summary>
/\(\d{3}\) \d{4}-\d{4}/g
</details>
