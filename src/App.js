import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Admin from './admin/index';

function App() {
  return (
      <Router>
	  <Routes>
	  <Route exact path="/admin" element={<Admin />} />
	  </Routes>
	  </Router>

  );
}

export default App;
