  <h1>Calculadora</h1>

  <p>Este projeto é um simples calculadora que eu fiz Usando React, JSX e Tailwind.</p>
  <p>Para realizar as equações eu usei a função evaluate do package mathjs. Essa função pega uma string e caso a equação faça sentido ela retorna o resultado da equação. Preferir usar essa função ao invés de escrever cada função para cada simbolo matemático por simplicidade e economia de tempo.</p>
    <h2>Explicação do código</h2>
  <p>Para renderizar ambos os números e os simbolos eu criei uma array para cada e os renderizei dinamicamente usando a função map, dessa maneira:</p>
<pre>
  <code>
      {Numbers.map((e, index) => {
            return (
              <button
                value={e}
                onClick={() => AddToCalNumber(index)}
                key={index}
                className="border-gray-400 border-4 active:scale-90 origin-center bg-yellow-400 p-8  rounded-lg active:bg-yellow-100 ease-in-out hover:scale-95"
              >
                {e}
              </button>
            );
           })}
  </code>
</pre>


<p>Para o projeto funcionar eu tive que criar dois estados uma que é uma array de strings que representa a conte(Conta) e um que serve para guardar o ultimo simbolo matemático clicado.</p>

<h3>AddToCalNumber</h3>
<p>A função que adiciona números a conta AddToCalNumber. Essa função tem como objetivo adicionar novos valores a array conta, como podemos ver nela existem duas possibilidades, a primeira foi criada para adicionar simbolos na conta, ela consiste de um argunmento if que terá seu código executado se o estado dos simbolos possuir algum valor, o código atualiza o estado copiando o que já estava na array e adicionado tanto o simbolo quanto o próximo número.</p>
<p>A segunda possibilidade é simplismente adicionar números ao estado. Por fim limpamos o estado dos simbolos.</p>

  <h3>AddtoCalSymbols</h3>
<p>A segunda função é AddtoCalSymbols que apenas tem como função mudar o valor do estado para o valor correspondente ao votão clicado.</p>

  <h3>Resultado</h3>
<p>Resultados é a função que atualiza o valor do estado que serve para mostrar o resultado da equação.</p>
<p>Primeiro ela verifica se o tamanho da equação é maior ou igual a zero se sim ela criar uma variável que tem como valor o resultado da equação e por fim atualiza o estado da conta, onde converte o resultado em uma string(Já que evaluate recebe uma string e retorna um número) e depois transforma a string em uma array de strings.</p>



<h3>Delete</h3>
<p>A Delete função remove o ultimo elemento da array usando o método filter, basicamente criamos uma array nova sem o ultimo elemento e colocamos a array nova como valor do estado.</p>
<h3>DeletaTudo</h3>
<p>DeletaTudo como o nome da diz simplesmente limpa todo a equação, limpando o estado Conta</p>

<h3>Explicando coisas mais complexa</h3>
<p>Você deve estar se peguntando como eu fiz para mostrar o simbolo matemático sem ter adicionado ele na array, bem eu simplesmente coloquei o estado  que representa os simbolos matemáticos no jsx de maneira que ele apareça mudando conforme o usuário clique em cada simbolo, e como o estado do simbolo é limpo depois de ser adicionado a array Conta ele não aparecera duplicado na equação.</p>
