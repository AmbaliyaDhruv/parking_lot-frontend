
import './App.css'
import Admin from './component/Admin'
import Exit from './component/Exit'
import{Routes,Route, Link} from "react-router-dom"
import UserTable from './component/UserTable'

function App() {


  return (
    <div className="App">
      <h1>Welcome to parking system</h1>
    <div className='btn'>
      <Link to="/">Home</Link>
     <Link to="/admin">Admin</Link>
      <Link to="/exit">Exit</Link>
    </div>
    
      
      <Routes>
        <Route path="/" element={<UserTable/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/exit" element={<Exit/>} />
      </Routes>
     
    </div>
  )
}

export default App
