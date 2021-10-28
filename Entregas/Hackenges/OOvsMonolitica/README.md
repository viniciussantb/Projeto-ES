<h1>As vantagens da solução OO sobre a versão monolítica</h1>

<h2>Qual o desafio proposto?</h2>
Cristina Lopes — professora da Universidade da Califórnia, em Irvine, nos EUA — é autora de um livro sobre estilos de programação (link). Ela discute no livro diversos estilos para implementação de um mesmo problema, chamado frequência de termos.

Dado um arquivo texto, deve-se listar as n-palavras mais frequentes em ordem decrescente de frequência e ignorando stop words, isto é, artigos, preposições, etc.

O código fonte em Python de todas as versões analisadas no livro está publicamente disponível no GitHub (e, para esse exercício, fizemos um fork do repositório original). Faça uma análise de duas dessas versões:

Monolítica, disponível neste link: https://github.com/mtov/exercises-in-programming-style/tree/master/04-monolith

Orientada a objetos, disponível neste link: https://github.com/mtov/exercises-in-programming-style/tree/master/11-things

Primeiro, revise e estude o código das duas versões (cada versão tem menos de 100 linhas). Em seguida, argumente sobre as vantagens da solução OO sobre a versão monolítica. Para isso, tente extrapolar o tamanho do sistema. Suponha que ele será implementado por desenvolvedores diferentes e que cada um ficará responsável por uma parte do projeto.

<h2>Conclusão</h2
A atividade em questão fornece um problema e duas soluções com implementações e arquiteturas diferentes. De um lado a forma de programação procedural, onde a aplicação é construída em um único bloco, que é aquela em que toda a base de código utilizada em sua programação fica contida em um só lugar, de forma que todas funcionalidades operam como parte de um único bloco, essa abordagem pode ser muito útil para solução de problemas pequenos, prototipagem de funcionalidades, testes de sintaxe da linguagem, dentre outros, porém, quando uma aplicação que usa esse tipo de paradigma começa a crescer, a complexidade de adicionar novas funcionalidades fica cada vez mais alta, fazendo com que o projeto necessite cada vez mais de mudanças em várias partes do código. 


Por outro lado, o paradigma orientado a objetos, fornece a liberdade de subdividir problemas e resolvê-los de forma separada. Além disso, o paradigma OO permite ocultar informações, definir heranças e facilitar a criação de abstrações, diminuindo a complexidade e dando controle e organização ao projeto.


O exemplo apresentado trata um problema simples, onde até mesmo um bloco de código pode resolvê-lo, mas quando comparado com a implementação orientada a objetos, fica nítido a organização e modularização do código, onde cada parte exerce um tipo de função específica do programa. O código retrata isso na forma de como são atribuídas responsabilidades a seus objetos. É possível notar como é organizado o manejo e manipulação das entradas que serão armazenadas e que depois  serão repassadas para outro objeto com a função de controlar e dar sentido na forma de saída.


A grande praticidade que POO oferece a um time é a possibilidade de desenvolver uma aplicação dividida em camadas, ou seja, o benefício não está só no desenvolvimento do projeto, mas também está no fim do projeto com uma manutenção facilitada ou com possíveis modificações sem atrapalhar o fluxo de outras funcionalidades. Supondo que um projeto contendo dois milhões de linhas de código precise de uma alteração de uma funcionalidade. Já que o projeto foi corretamente dividido e modularizado será fácil detectar a camada onde essa função está sendo executada, ir lá e modificá-la, ou que em outro caso um projeto tenha quinhentos programadores. Fácil, só dividir as equipes e direcionar as equipes nas subdivisões do projeto.


Por último e que não está tão claro no exemplo, é que o paradigma POO facilita bastante a reutilização de código, reduzindo bastante o tempo na conclusão de um projeto. Existem aplicativos e sistemas que têm várias partes do seu código de funcionalidades já salvas de outros projetos, dando a equipe agilidade na entrega da uma solução.


A programação orientado a objeto é até o hoje o paradigma mais utilizado na engenharia de software, ela oferece aos desenvolvedores ferramentas, interfaces e modelagens capazes desenvolver qualquer tipo de projeto, não é atoa que a maioria dos padrões de projetos, arquitetura de software e outras padronizações utilizam esse paradigma para aplicar seus métodos de desenvolvimento.
