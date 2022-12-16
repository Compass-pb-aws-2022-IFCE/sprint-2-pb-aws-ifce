import React, {useState, useEffect} from 'react';
import './App.css';
import { api } from './config';

function App() {

  const [quadrinhos, setQuadrinhos] = useState([])
  const [title, setTitle] = useState('')


  useEffect(() => {
    if (title){
      api.get(`/3/search/movie?query=${title}`).then(({data}) => {
        setQuadrinhos(data.results);
      })
    } else {
      setQuadrinhos([])
    }
  }, [title])
  
  return (
    <div className='container'>
      <div className='content'>
        <input value={title} onChange={e=>setTitle(e.target.value)}></input>
        <div>
          {quadrinhos.length ? quadrinhos.map(e => <img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}/>) : <h1>Digite um filme para busca</h1>}
          
        </div>
      </div>
    </div>
  );
}

export default App;
