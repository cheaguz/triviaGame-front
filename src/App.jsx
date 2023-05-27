import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Questions } from './pages/Questions';
import { Ranking } from './pages/Ranking';
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { SendQuestions } from './pages/SendQuestions';
import { useSelector } from 'react-redux'

function App() {
  const { logged } = useSelector(state => state)

  return (
    <>
      <Header />
      <Routes>
        {logged ?
          <>
            <Route path='/' element={<Home />} />
            <Route path='/game/category=:id' element={<Questions />} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='/send-questions' element={<SendQuestions />} />
          </>
          :
          <>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </>
        }
      </Routes>
    </>
  )
}

export default App
