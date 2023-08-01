import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () =>{
  const [data, setData] = useState([]);
  const [pesquisa, setPesquisa] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/exibirLista.php')
      .then((response) => {
        setData(response.data)
        console.log(response)
      })
      .catch((error) => console.error('Erro ao buscar os dados:', error));
  }, []);

  const addLista = () =>{
    if(!pesquisa){
      return;
    }

    axios.post('http://localhost:8000/addLista.php', { name: pesquisa })
      .then((response) => setData([...data, response.data]))
      .catch((error) => console.error('Erro ao buscar os dados:', error));

    setPesquisa("");
  }

  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <div>
          <h2 className='text-xl'>Lista de Produtos</h2>
          <div>
            <input className='px-2 py-1 border border-black' onChange={(e)=>setPesquisa(e.target.value)} value={pesquisa} type='text' />
            <button className='px-2 py-1 border border-black bg-blue-100' onClick={addLista}>Buscar</button>
          </div>
          <ul>
            {
              data.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
