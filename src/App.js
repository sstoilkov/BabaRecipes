
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header"


function App() {
  return (
    <div className="App">
      <Header />
      <main id="main-content">
        <Home />
      </main>
    </div>
  );
}

export default App;
