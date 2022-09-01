import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Page from './components/Page'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Page />

      <ToastContainer />
    </div>
  )
}

export default App
