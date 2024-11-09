
import './App.css';
import { Outlet, Router } from 'react-router-dom';


function App() {
  return (
  <main className='main'>
    <Outlet/>
  </main>
  );
}

export default App;
