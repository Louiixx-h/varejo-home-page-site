import './App.css';

import Slider from 'infinite-react-carousel';

import carrinho from './carrinho.png'
import conta from './conta.png'
import logoipanema from './logo.png'

import carnes from './carnes.png'
import produtos from './produtos.png'
import jogoPanelas from './jogo-panelas.png'
import ferramentas from './ferramentas.png'
import limpeza from './limpeza.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <header className="App-header">
          <a
            href="/">
            <img src={logoipanema} className="App-logo" alt="logo" width="200"/>
          </a>
          <input className="search-header" 
            type="text" 
            name="search" 
            placeholder="Busque pelo seu produto."/>
          <div>
          <a
            href="/">
            <img className="compras-header" src={conta} width="40"/>
          </a>
          <a
            href="/">
            <img className="compras-header" src={carrinho} width="40"/>
          </a>
        </div>
        </header>
        <nav className="App-navigation">
          <div className="nav-buttons">
            <a href="/">
              <p>Elétrica</p>
            </a>
            <a href="/">
              <p>Cozinha</p>
            </a>
            <a href="/">
              <p>Casa</p>
            </a>
            <a href="/">
            <p>Calçados</p>
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
              <img src={ferramentas} width="100%"/>
            </div>
            <div>
              <img src={produtos} width="100%"/>
            </div>
            <div>
              <img src={jogoPanelas} width="100%"/>
            </div>
            <div>
              <img src={limpeza} width="100%"/>
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
