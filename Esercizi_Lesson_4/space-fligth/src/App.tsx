import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';

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
            <Route path='/details/:id' element={<DetailsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
