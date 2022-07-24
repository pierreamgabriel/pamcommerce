import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./admin/index";
import Installation from "./admin/Installation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Installation />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
