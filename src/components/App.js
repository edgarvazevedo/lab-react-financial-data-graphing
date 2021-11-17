import Graph from "./Graph";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container h-100vh">
      <h1 className="text-center m-3">Gráfico da Cotação de Bitcoin</h1>
      <Graph />
    </div>
  );
}

export default App;