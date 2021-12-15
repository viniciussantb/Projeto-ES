import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Feed from './Pages/Feed/Feed';
import EmailContextProvider from './context/EmailContext';
import UserContextProvider from './context/UserContext';
import CreateRidePage from './Pages/CreateRide/CreateRidePage'
import Cabecalho from './Components/Cabecalho/Cabecalho'
import Rodape from './Components/Rodape/Rodape'



function App() {

  return (
    <UserContextProvider>
      <EmailContextProvider>
        <BrowserRouter>
          <Cabecalho />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/login' element={ <Login/>}/>
            <Route exact path='/feed' element={ <Feed/>}/>
            <Route exact path='/createride' element={ <CreateRidePage/>}/>

          </Routes>
          <Rodape />
      </BrowserRouter>
    </EmailContextProvider>
  </UserContextProvider>

  )
}

export default App
