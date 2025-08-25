import "./App.css";
import TenisNikeIcon from "./assets/tenis-nike.webp";

function App() {
  return (
    <>
      <main>
        <header></header>
        <section className="produtos">
          {/* Produto 1 */}
          <a className="link-card" href="#">
            <div className="card">
              <img src={TenisNikeIcon} alt="tenis nike" className="img-prod" />
              <h2>Tenis Nike</h2>
              <p className="desc">Um lindo tenis da Nike</p>
              <p className="preco">R$ 699,90</p>
              <div className="avaliacao">★ ★ ★ ★ ☆</div>
              <div className="off">-15% </div>
            </div>
          </a>
          {/* Produto 2 */}
          <a className="link-card" href="#">
            <div className="card">
              <img src={TenisNikeIcon} alt="tenis nike" className="img-prod" />
              <h2>Tenis Nike</h2>
              <p className="desc">Um lindo tenis da Nike</p>
              <p className="preco">R$ 699,90</p>
              <div className="avaliacao">★ ★ ★ ★ ☆</div>
              <div className="off">-15% </div>
            </div>
          </a>
          {/*   Produto 3 */}
          <a className="link-card" href="#">
            <div className="card">
              <img src={TenisNikeIcon} alt="tenis nike" className="img-prod" />
              <h2>Tenis Nike</h2>
              <p className="desc">Um lindo tenis da Nike</p>
              <p className="preco">R$ 699,90</p>
              <div className="avaliacao">★ ★ ★ ★ ☆</div>
              <div className="off">-15% </div>
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
