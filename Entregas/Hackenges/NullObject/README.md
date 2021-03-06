<h1>Null Object Pattern</h1>

<h2>Qual o desafio proposto?</h2>

Em uma entrevista dada ao site InformIT, em 2009, por ocasião dos 15 anos do lançamento da primeira edição do GoF, três dos autores do livro mencionaram que — se tivessem que lançar uma segunda edição do trabalho — provavelmente manteriam os padrões originais e incluiriam alguns novos, que se tornaram comuns desde o lançamento da primeira edição, em 1994. 

Um dos novos padrões que eles mencionaram na entrevista é chamado de Null Object. Estude e explique o funcionamento e os benefícios desse padrão de projeto. Para isso, você vai encontrar diversos artigos na Web.

Mas se preferir consultar um livro, uma boa referência é o Capítulo 25 do livro Agile Principles, Patterns, and Practices in C#, de Robert C. Martin e Micah Martin. Ou então o refactoring chamado Introduce Null Object do livro de Refactoring de Martin Fowler.

<h2>Conclusão</h2>

Em um projeto, quando um objeto tem algum dos seus atributos vazios (null) e queremos utilizá-los,provavelmente irá causar um erro do tipo NullPointerException, pois está tentando acessar um atributo que não existe - está nulo - . Para resolver este problema, antes de utilizar este atributo, convém checar se está nulo ou não. Porém, vários testes de ifs/elses poderão ser necessários, deixando o código propenso a erros e de difícil leitura. A utilização de blocos try/catch podem acentuar ainda mais esse problema.


Por isso, surgiu o padrão Null Object, sua essência consiste em utilizar os princípios do polimorfismo para eliminar a necessidade de sempre realizar essa checagem, simplificando o código. Com isso, deve-se criar um objeto derivado que tenha as mesmas características de propriedades e métodos, porém, com comportamentos distintos, mantendo o padrão do objeto nulo. Assim, podemos tratar o objeto independentemente do seu tipo. 


Desta forma, utiliza-se o if/else apenas em um momento para determinar qual o tipo de objeto a ser instanciado. Se o objeto a ser utilizado for nulo, utiliza-se o objeto nulo criado para estender o objeto "padrão", pois ele é criado somente para tratar dos momentos em que o atributo for nulo. Caso não, utiliza-se o objeto "padrão" com os atributos preenchidos. Esta prática centraliza o teste if/else em um só lugar e garante, de uma forma elegante, que erro algum será lançado na execução.


Segue um exemplo de código que não utiliza o padrão de objeto nulo:
	
```
if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log(‘You have access’)
} else {
    console.log(‘You are not allowed here’)
```


Vemos um grande uso de checagens para ter certeza que o objeto ‘user’ não é nulo. Isso dificulta a leitura do código, tendo uma maior chance de causar erros e uma maior dificuldade para realização de manutenções. Segue um exemplo com a utilização do padrão de objeto nulo:

	
	


```if (user.hasAccess()) {
    console.log(‘You have access’)
} else {
    console.log(‘You are not allowed here’)
```



O código torna-se mais legível e menos propenso a erros. Isso acontece pois o tipo do objeto foi determinado anteriormente, então os futuros métodos não necessitarão se preocupar com o valor dos atributos do ‘user’ ser vazio.
