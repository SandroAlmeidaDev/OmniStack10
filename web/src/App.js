import React, { useState, useEffect } from 'react';
import api from  './services/api'; 

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


// Os 3 conceitos que montam tudo no React
// Componente -> Bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicacao
// Propriedade -> Informações que o componente PAI passa para o componente FILHO
// Estado -> Informaçoes mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  // Variaveis no estado do componente

  const [devs, setDevs] = useState([]);

  useEffect(()=> {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const  response = await api.post('/devs', data)
     //Atualiza tela com novo Dev cadastrado
      setDevs([...devs, response.data]);
   }

  /*Funçao contador increment 
  const [counter , setCounter] = useState(0);
  function incrementCounter(){
    setCounter(counter + 1);
  }
  */
  /*return (
    <>
     <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
  */
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}          
        </ul>
      </main>
    </div>
  );
}

export default App;
