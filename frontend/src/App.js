
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
function App() {
    
  return (
    <div className="App">
         <BrowserRouter>
             <Header/>
             <Routes>
                 <Route path='/'  element={<Home/>}/>
                 <Route path='/login'  element={<Login/>}/>
                 <Route path='/dashboard'  element={<Dashboard />}/>
             </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
