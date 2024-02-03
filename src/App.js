import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <HomePage/>
    </>
  )
}

export default App