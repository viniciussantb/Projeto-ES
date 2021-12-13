import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Feed from './Pages/Feed/Feed';
import EmailContextProvider from './context/EmailContext';

function App() {

  return (
  <EmailContextProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={ <Login/>}/>
        <Route exact path='/feed' element={ <Feed/>}/>
      </Routes>
    </BrowserRouter>
  </EmailContextProvider>

  )
}

export default App
