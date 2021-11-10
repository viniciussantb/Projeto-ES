import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Todo from './pages/Todo';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthApiContextProvider from './context/AuthApiContext';
import EmailContextProvider from './context/EmailContext';

function App() {

  return (
    <EmailContextProvider>
      <AuthApiContextProvider>
        <BrowserRouter>

          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/todo' element={ <Todo/>}/>
          </Routes>

        </BrowserRouter>
      </AuthApiContextProvider>
    </EmailContextProvider>
  )
}

export default App
