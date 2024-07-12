import Auth from './Components/Auth'
import ExpenceTracker from './Components/ExpenseTracker'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InputComponent from './Components/InputComponent'

function App() {


  return (
    <Router classname='h-full'>
      <Routes>
        <Route path='/Auth' />
        {/* <Route path='/' element={<>
          <Auth /></>} /> */}
        <Route path='/' element={< InputComponent />} />
        {/* <ExpenceTracker /> */}
      </Routes>
    </Router>
  )
}

export default App
