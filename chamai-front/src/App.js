import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';

function App() {

  return (

  <BrowserRouter>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={ <Login/>}/>
    </Routes>

  </BrowserRouter>

  )
}

export default App
