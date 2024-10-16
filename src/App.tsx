import { useState } from "react";
import { evaluate } from "mathjs";
export const App = () => {
  // Ao invés de criar três estados para cada um fazer algo, por que não usar uma array? posso usar vários métodos que facilitaram em muita certas funções como deletar
  const [Conta, setConta] = useState<string[]>([]);
  const [SimboloM, setSimboloM] = useState<string>();
  const Numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const Symbols = ["*", "+", "-", "/", "."];

  // Quero que o simbolo que for selecionado, possa ser mudado caso outro simbolo seja clicado.
  // Com certeza o valor do simbolo deve ser um estado
  // Fazer com que ele apenas seja realmente adicionado caso o próximo número seja adicionado a array
  // Então a função que adiciona o simbolo deve apenas mudar o estado e não adicionar o simbolo
  const AddToCalNumber = (e: number) => {
    //  Para implementar decimais faça com que apenas um possa ser colocado e só depois de colocar um simbolo é que mais pode ser colocado
    setConta((prev) => {
      // Para adicionar um simbolo a array conta, primeiro perguntamos se existe um simbolo guardado no estado se sim, adicionamos o simbolo e um número
      if (SimboloM) {
        return [...prev, SimboloM, Numbers[e]];
      }
      // Para adicionar um número a array primeiro copiamos o estado anterior da array e adicionamos o número correspondente ao index da array
      return [...prev, Numbers[e]];
    });
    // Depois de adicionar cada número limpamos o estado que armazena os símbolos
    setSimboloM("");
  };
  // Só atualiza o estado com o valor do botão clicado correspondente
  const AddtoCalSymbols = (v: number) => {
    setSimboloM(Symbols[v])
  };
  // Resultado é a função que atualiza o valor do estado que serve para mostrar o resultado da equação.
  // Primeiro ela verifica se o tamanho da equação é maior que zero se sim ela criar uma variável que tem como valor o resultado da equação e por fim atualiza o estado da conta, onde converte o resultado em uma string(Já que evaluate recebe uma string e retorna um número) e depois transforma a string em uma array de strings
  const Resultado = () => {
    if (Conta.length > 0) {
      const result = evaluate(`${Conta.join("")}`);
      setConta(Array.from(String(result)));
    }
  };
  // A função remove o ultimo elemento da array usando o método filter, basicamente criamos uma array nova sem o ultimo elemento e colocamos array nova como valor do estado
  const Delete = () => {
    setConta((prev) => prev.filter((_, index) => index !== prev.length - 1));
  };
  // Simplesmente limpamos tanto o estado com a equação quanto o estado dos símbolos
  const DeletaTudo = () => {
    setConta([]);
    setSimboloM("");
  };
  // Para renderizar os botões usei o método map sobre as arrays
  return (
    <main className="flex flex-col w-full justify-center py-10  items-center">
      <div className="border-orange-600 border-4 p-3 rounded-lg shadow-2xl">
        <p className="border-4 border-black w-full p-8 my-5 text-lg rounded-lg">
          {Conta.length < 1 ? (
            0
          ) : (
            <>
              {Conta}
              {SimboloM}
            </>
          )}
        </p>
        <div className=" flex gap-3">
          <div className=" grid grid-cols-3 gap-3">
            <button
              onClick={DeletaTudo}
              className="border-black border-4 p-8 active:scale-90 origin-center col-span-2  rounded-lg ease-in-out hover:scale-95"
            >
              {"C"}
            </button>
            <button
              onClick={Delete}
              className="border-black border-4 p-8 active:scale-90 origin-center rounded-lg ease-in-out hover:scale-95"
            >
              {"X"}
            </button>
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
            <button
              onClick={Resultado}
              className="border-black border-4 p-8 active:scale-90 origin-center col-span-2 rounded-lg text-5x1 ease-in-out hover:scale-95"
            >
              {"="}
            </button>
          </div>
          <div className=" grid grid-cols-1 gap-3">
            {Symbols.map((e, index) => {
              return (
                <button
                  value={e}
                  onClick={() => AddtoCalSymbols(index)}
                  key={index}
                  className="border-black border-4 p-9 active:scale-90 origin-center text-lg font-bold bg-gray-400 text-white rounded-lg ease-in-out hover:scale-95 active:bg-gray-300"
                >
                  {e}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
