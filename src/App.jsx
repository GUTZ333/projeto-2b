import "./App.css";
import TenisNikeIcon from "./assets/tenis-nike.webp";
import UniformeFlamengo from "./assets/uniforme-flamengo-original-2025.webp"
import TenisFlamengo from "./assets/tenis-flamengo.webp"
import MeiaFlamengo from "./assets/meia-flamengo.webp"

function App() {
  return (
    <>
      <main>
        <header></header>
        <section className="produtos">
          {/* Produto 1 */}
          <a className="link-card" href="#">
            <div className="card">
              <img src={TenisFlamengo} alt="tenis nike" className="img-prod" />
              <h2>Tenis Flamengo</h2>
              <p className="desc">Tenis do clube Flamengo</p>
              <p className="preco">R$ 60,90</p>
              <div className="avaliacao"><span>★ ★ ★ ★ ☆</span>(336)</div>
              <div className="off">-20% </div>
            </div>
          </a>
          {/* Produto 2 */}
          <a className="link-card" href="#">
            <div className="card">
              <img src={UniformeFlamengo} alt="tenis nike" className="img-prod" />
              <h2>Uniforme Flamengo</h2>
              <p className="desc">Uniforme original do Flamengo original de 2025 com patrocínio da Fla.Bet</p>
              <p className="preco">R$ 475,58</p>
              <div className="avaliacao"><span>★ ★ ★ ★ ★ </span>(234)</div>
              <div className="off">-20% </div>
            </div>
          </a>
          {/*   Produto 3 */}
          <a className="link-card" href="#">
            <div className="card">
              <img src={MeiaFlamengo} alt="tenis nike" className="img-prod" />
              <h2>Meia do Flamengo</h2>
              <p className="desc">Meia do Clube Flamengo</p>
              <p className="preco">R$ 40,90</p>
              <div className="avaliacao"><span>★ ★ ★ ★ ★</span>(178)</div>
              <div className="off">-10% </div>
            </div>
          </a>
          
        </section>
        <section className="produto-destaque"></section>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
