import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './component/Characters';

function App() {
  const [characters, setCharacters] = useState(null); 

  const reqApi = async () => {
    const api = await fetch ('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();

    setCharacters(characterApi.results);
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 classeName="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (    
          <>   
          <img src = {imageRickMorty} alt = "Rick & Morty" classeName="img-home" />
          <button onClick={reqApi} className="btn-search">
            Buscar Personajes
            </button>
          </> 
        )
      }
      </header>
    </div>
  );
}

export default App;
