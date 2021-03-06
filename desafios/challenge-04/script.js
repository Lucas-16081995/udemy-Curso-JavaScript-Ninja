/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (param) {
    /* if (param) {
        return true
    }
    return false; */
    // ou

    return !!param;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
/* console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(''));
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(NaN)); */
// false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
/*  console.log(isTruthy(1));
 console.log(isTruthy('jose'));
 console.log(isTruthy([]));
 console.log(isTruthy({}));
 console.log(isTruthy(function(){}));
 console.log(isTruthy('Curso JS'));
 console.log(isTruthy(20 * 30));
 console.log(isTruthy([1,2,3,4]));
 console.log(isTruthy({a:1,b:2,c:3,d:4})); */
//true

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Ford',
    modelo: 'Ka',
    placa: 'ABC-1234',
    ano: 2012,
    cor: 'preto',
    qntPortas: 4,
    assentos: 5,
    qntPessoas: 0
}
//console.log(carro);

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.setCor = function (cor) {
    carro.cor = cor;
}


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.getCor = function () {
    return carro.cor;
}


/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.getModelo = function () {
    return carro.modelo;
}


/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.getMarca = function () {
    return carro.marca;
}


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.getMarcaModelo = function () {
    return "Esse carro é um " + carro.getMarca() + " " + carro.getModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function (numPessoas) {
    var totalPessoas = carro.qntPessoas + numPessoas;
    if (carro.qntPessoas === carro.assentos && totalPessoas >= carro.assentos) {
        return 'O carro já está lotado';
    }
    if (totalPessoas > carro.assentos) {
        var qntPessoasCabem = carro.assentos - carro.qntPessoas;
        var pluralOuSingular = qntPessoasCabem === 1 ? ' pessoa ' : ' pessoas ';
        return 'Só cabem mais ' + qntPessoasCabem + pluralOuSingular + '!';
    }
    carro.qntPessoas += numPessoas;

    return "Já temos " + carro.qntPessoas + " pessoas no carro!";
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.getCor());


// Mude a cor do carro para vermelho.
carro.setCor('VERMELHO');

// E agora, qual a cor do carro?
console.log(carro.getCor());

// Mude a cor do carro para verde musgo.
carro.setCor('verde musgo');

// E agora, qual a cor do carro?
console.log(carro.getCor());

// Qual a marca e modelo do carro?
console.log(carro.getMarcaModelo());

// Adicione 2 pessoas no carro.
console.log(carro.addPessoas(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.addPessoas(4));

// Faça o carro encher.
console.log(carro.addPessoas(3));

// Tire 4 pessoas do carro.
console.log(carro.addPessoas(-4));

// Adicione 10 pessoas no carro.
console.log(carro.addPessoas(10));

// Quantas pessoas temos no carro?
console.log(carro.qntPessoas);