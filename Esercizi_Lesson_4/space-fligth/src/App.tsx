import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <CustomNavbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
