let nome: string = 'Glaucia Lemos';
console.log(nome);

let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);

let carro: {
    nome: string;
    ano: number;
    preco: number;
};

carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 };
console.log(carro);

function nultiplicarNumero(num1: number, num2: number) {
    return num1 * num2;
}

console.log(nultiplicarNumero(2, 5));