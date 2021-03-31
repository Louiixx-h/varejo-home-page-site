import './App.css';
import './AppGrid.css';

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
      <article>
        <div class="container">
        <div class="item">
            <h2>Ferramentas</h2>
            <img src="https://s2.glbimg.com/56vdja0cxdCoUPWP7eehjSZgTmg=/0x0:1400x788/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/t/f/ZBcMRsSkOA0FB8TfRrfw/saiba-quais-sao-as-ferramentas-que-nao-podem-faltar-na-sua-casa.png"
                width="350"/>
            <button>CONFIRA</button>
          </div>
          <div class="item">
            <h2>Cozinha</h2>
            <img src="https://assets.tramontina.com.br/upload/blog_post/1603829784_capa_facas.png"
                width="350"/>
            <button>CONFIRA</button>
          </div>
          <div class="item">
            <h2>Calçados</h2>
            <img src="https://bottero.net/blog/wp-content/uploads/2020/12/Tamanco_DestacadaBlog-1280x720.png"
                width="350"/>
            <button>CONFIRA</button>
          </div>
          <div class="item">
            <h2>Produtos domésticos</h2>
            <img src="http://kids.pplware.sapo.pt/wp-content/uploads/2018/02/quimicos_1.jpg"
                width="350"/>
            <button>CONFIRA</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
