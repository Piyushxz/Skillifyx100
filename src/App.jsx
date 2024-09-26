import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { useModal } from './context/modal-context'
import Modal from './components/SignUpModal'
import SignInModal from './components/SignInModal'
function App() {
  const [count, setCount] = useState(0)
  
  const {isSignUpModalOpen,isSignInModalOpen} = useModal()


  return (
    <>
      <Home/>
      {
        isSignUpModalOpen &&
        <Modal/>
      }

      {
        isSignInModalOpen &&
        <SignInModal/>
      }
    </>
  )
}

export default App
