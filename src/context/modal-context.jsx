import { useContext,createContext, Children, useReducer } from "react";
import modalReducer from "../reducer/modalReducer";




const initialValue = {
    isSignInModalOpen:false,
    isSignUpModalOpen:false,
    acticeUsername:null
}


const ModalContext = createContext(initialValue)


const ModalProvider = ({children}) =>{

    const [{isSignInModalOpen,isSignUpModalOpen,acticeUsername},modalDispatch] = useReducer(modalReducer,initialValue)

    return (
        <ModalContext.Provider value={{isSignInModalOpen,isSignUpModalOpen,acticeUsername,modalDispatch}}>
            {children}
        </ModalContext.Provider>
    )
}


const useModal = () => useContext(ModalContext)

export {useModal , ModalProvider}