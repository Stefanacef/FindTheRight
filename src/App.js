import "./App.css";
import HomePage from "./containers/HomePage";
import CostumerAccessPage from "./components/costumerAccessPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/costumer/access" element={<CostumerAccessPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
