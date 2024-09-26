import { useContext,createContext, Children, useReducer } from "react";
import modalReducer from "../reducer/modalReducer";




const initialValue = {
    isSignInModalOpen:false,
    isSignUpModalOpen:false,
}


const ModalContext = createContext(initialValue)


const ModalProvider = ({children}) =>{

    const [{isSignInModalOpen,isSignUpModalOpen},modalDispatch] = useReducer(modalReducer,initialValue)

    return (
        <ModalContext.Provider value={{isSignInModalOpen,isSignUpModalOpen,modalDispatch}}>
            {children}
        </ModalContext.Provider>
    )
}


const useModal = () => useContext(ModalContext)

export {useModal , ModalProvider}