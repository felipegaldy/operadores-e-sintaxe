/*
- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo 
"Os números `num1` e `num2` não/são iguais. 
Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".

exemplo:
 Input: 1, 2Output: Os números 1 e 2 não são iguais. 
Sua soma é 3, que é menor que 10 e menor que 20.*/

const comparaNumero = (a, b) => { 
    let res = a == b? `Os números ${a} e ${b} são iguais`:`Os números ${a} e ${b} não são iguais`;
    let soma = a+b;
    let res2 = soma <= 10? `Sua soma é ${soma}, que é menor que 10`:`Sua soma é ${soma}, que é maior que 10`
    let res3 = soma <= 20? `e menor que 20`:`e maior que 10`
    
    return console.log(res + ', ' + res2 + ' ' + res3)
}

comparaNumero(2,7); 