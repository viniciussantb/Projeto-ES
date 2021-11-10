import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Todo from './pages/Todo';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/'>Login</Link>
        <Link to='/signup'>SignUp</Link>
        <Link to='/todo'>Todo</Link>
      </div>

      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/todo' element={<Todo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
