import { Route, Routes } from 'react-router-dom';
import { Home, Login, Edit, Register } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
