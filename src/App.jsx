import "./App.css";

function App() {
  return (
    <>
      <main>
        <header></header>
        <section className="produtos"></section>
        <section className="produto-destaque">
          {/* Produto 1 */}
          <div className="card">
            <h2>Tenis Nike</h2>
            <p className="desc">Um lindo tenis da Nike</p>
            <p className="preco">R$ 699,90</p>
            <div className="avaliacao">★ ★ ★ ★ ☆</div>
          </div>
        </section>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
