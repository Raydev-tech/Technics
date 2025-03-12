import { BrowserRouter,Routes,Route } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Pages/HomePage'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={<Homepage />} />
     </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
