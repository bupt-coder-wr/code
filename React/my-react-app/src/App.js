import Home from "./views/Home.jsx";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
