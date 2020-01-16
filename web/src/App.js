import React, { useState } from 'react';

// Os 3 conceitos que montam tudo no React
// Componente -> Bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicacao
// Propriedade -> Informações que o componente PAI passa para o componente FILHO
// Estado -> Informaçoes mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [counter , setCounter] = useState(0);
  function incrementCounter(){
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
