import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { useModal } from './context/modal-context'
import Modal from './components/Modal'
function App() {
  const [count, setCount] = useState(0)
  
  const {isSignUpModalOpen} = useModal()

  console.log(isSignUpModalOpen , "hey")
  return (
    <>
      <Home/>
      {
        isSignUpModalOpen &&
        <Modal/>
      }
    </>
  )
}

export default App
