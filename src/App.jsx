import "./App.css";
import TenisNikeIcon from "./assets/tenis-nike.webp";

function App() {
  return (
    <>
      <main>
        <header></header>
        <section className="produtos">
          {/* Produto 1 */}
          <div className="card">
            <img src={TenisNikeIcon} alt="tenis nike" className="img-prod" />
            <h2>Tenis Nike</h2>
            <p className="desc">Um lindo tenis da Nike</p>
            <p className="preco">R$ 699,90</p>
            <div className="avaliacao">★ ★ ★ ★ ☆</div>
            <div className="off">-15% </div>
          </div>
          
        </section>
        <section className="produto-destaque"></section>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
