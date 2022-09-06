import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Page from './components/Page'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserPanel from './pages/UserPanel'
import Plantilla from './components/userpanel/Plantilla'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Page />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/user-panel" element={<UserPanel />} />
          <Route path="/plantilla/:id" element={<Plantilla />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
