import './App.css';

import Slider from 'infinite-react-carousel';

import carrinho from './carrinho.png'
import logoipanema from './logo.png'
import carnes from './carnes.png'
import produtos from './produtos.png'
import jogoPanelas from './jogo-panelas.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <header className="App-header">
          <img src={logoipanema} className="App-logo" alt="logo" width="200"/>
          <input className="search-header" 
            type="text" 
            name="search" 
            placeholder="Busque pelo seu produto."/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img className="compras-header" src={carrinho} width="60"/>
          </a>
        </header>
        <nav className="App-navigation">
          <div className="nav-buttons">
            <a href="/">
              <p>Carnes</p>
            </a>
            <a href="/">
              <p>Temperos</p>
            </a>
            <a href="/">
              <p>Casa</p>
            </a>
            <a href="/">
            <p>Produtos de Limpeza</p>
            </a>
            <a href="/">
              <p>Ferramentas</p>
            </a>
          </div>
        </nav>
      </div>
      <main>
        <article className="article">
          <Slider
          dots
          duration={100}
          className="slider">
            <div>
              <img src={carnes} width="100%"/>
            </div>
            <div>
              <img src={produtos} width="100%"/>
            </div>
            <div>
              <img src={jogoPanelas} width="100%"/>
            </div>
            <div>
              <img src={produtos} width="100%"/>
            </div>
            <div>
              <img src={carnes} width="100%"/>
            </div>
          </Slider>
        </article>
      </main>
    </div>
  );
}

export default App;
