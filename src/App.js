import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";


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
