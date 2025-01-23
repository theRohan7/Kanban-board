import './App.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TaskContext'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {


  return (
    <>
    <Toaster />
    <AuthProvider>
      <TaskProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </TaskProvider>
    </AuthProvider>
      
    </>
  )
}

export default App
