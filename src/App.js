
import './App.css';
import{BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Create from './Create';

function App() {
  return <div>
    <BrowserRouter >
      <Routes >
      <Route path='/' element={<Signin />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Home/Create' element ={<Create />} />
      <Route path='/Signup' element ={<Signup />} />


      </Routes>
    </BrowserRouter>
  
  </div>
    
  
}

export default App;
