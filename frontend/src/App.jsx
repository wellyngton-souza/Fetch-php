import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () =>{
  const [resposta, setResposta] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [btnEnviar, setBtnEnviar] = useState(true);

  useEffect(() => {
    axios.get('https://teste-apiaa.000webhostapp.com/consultarProduto.php')
      .then((response) => {
        setResposta(response.data)
        console.log(response)
      })
      .catch((error) => console.error('Erro ao buscar os dados:', error));
  }, []);

  const validarForm = (e) =>{
    e.preventDefault();

    if(!pesquisa){
      return;
    }

    e.target.submit();
  }
  
  useEffect(() =>{
    setBtnEnviar(true);
    for(let i = 0; i < resposta.length; i++){
      if (resposta[i].produto === pesquisa) {
        setBtnEnviar(false);
      }
    }
  },[pesquisa, resposta]);
  
  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <div>
          <h2 className='text-xl'>Lista de Produtos</h2>
          <form
            action='https://teste-apiaa.000webhostapp.com/addLista.php'
            method='POST'
            onSubmit={validarForm}
          >
            <input className='px-2 py-1 border border-black'
              name='produto'
              onChange={(e)=>setPesquisa(e.target.value)}
              value={pesquisa}
              type='text'
            />
            {
              btnEnviar && <button className='px-2 py-1 border border-black bg-blue-100'>Buscar</button>
            }
          </form>
          <ul>
            {
              resposta.slice().reverse().map((item) => ( /* inverte a ordem da lista */
                <li key={item.produto}>{item.produto}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
