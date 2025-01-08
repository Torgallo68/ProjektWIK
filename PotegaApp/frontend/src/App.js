import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

import './App.css'; 
import Header from './components/Header'; 
import ExsListPage from './pages/ExsListPage';
import ExPage from "./pages/ExPage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <Header />
        <Routes> 
          <Route path="/" element={<ExsListPage />} /> 
          <Route path="/ex/:id" element={<ExPage />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
