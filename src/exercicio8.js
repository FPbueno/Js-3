pesos = [0.4,0.2,0.1,0.3];
notas = [8.2,5.0,10.0,9.1];
i = 0;
soma = 0;
while ( i < pesos.length){
    r = pesos[i] * notas[i];
    soma = soma + r;
    i = i + 1;
}
console.log(soma)