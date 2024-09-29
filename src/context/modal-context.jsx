import { useContext,createContext, Children, useReducer } from "react";
import modalReducer from "../reducer/modalReducer";




const initialValue = {
    isSignInModalOpen:false,
    isSignUpModalOpen:false,
    isPurchaseModalOpen:false,
    id:null,
    isAlertVisible:false,
    isAddCourseModalOpen:false
}


const ModalContext = createContext(initialValue)


const ModalProvider = ({children}) =>{

    const [{isSignInModalOpen,isSignUpModalOpen,isPurchaseModalOpen,id,isAlertVisible,isAddCourseModalOpen},modalDispatch] = useReducer(modalReducer,initialValue)

    return (
        <ModalContext.Provider value={{isSignInModalOpen,isSignUpModalOpen,isPurchaseModalOpen,id,isAlertVisible,isAddCourseModalOpen,modalDispatch}}>
            {children}
        </ModalContext.Provider>
    )
}


const useModal = () => useContext(ModalContext)

export {useModal , ModalProvider}