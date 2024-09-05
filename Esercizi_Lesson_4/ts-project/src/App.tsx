import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ExampleClass from './components/ExampleClass';
import ExampleFunctional from './components/ExampleFunctional';
import BootstrapForm from './components/BootstrapForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchComponent from './components/FetchComponent';

function App() {
  return (
    <BrowserRouter>
      <main className='bg-dark text-light vh-100'>
        <Routes>
          <Route path='/' element={<FetchComponent />} />
          <Route path='/class' element={<ExampleClass subtext="Esempio" otherprop={1} />} />
          <Route path='/functional' element={<ExampleFunctional myprop='Esempio' num={2} />} />
          <Route path='/bootstrap' element={<BootstrapForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
