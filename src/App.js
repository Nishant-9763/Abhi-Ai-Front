
import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Get from './components/get/Get'
import Create from './components/create/Create'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/Invalid';


function App() {
  // let token = localStorage.getItem('newKey')

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      < ToastContainer/>
      <Routes>
         <Route path={"/"} element={<Login/>} /> 
        <Route path={"/create"} element={<Create/>} />
        <Route path={"/register"} element={<Register/>} />
       <Route path={"/get"} element={<Get/>} /> 
        <Route path={"/*"} element={<NotFound/>} />


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
