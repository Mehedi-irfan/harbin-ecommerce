import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './Component/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
