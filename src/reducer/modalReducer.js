const modalReducer = (state,{type,payload}) =>{

    switch(type){
        case "OPEN_SIGNIN_MODAL":
            return{
                ...state,
                isSignInModalOpen : !state.isSignInModalOpen
            }

        case "OPEN_SIGNUP_MODAL":
                return{
                    ...state,
                    isSignUpModalOpen : !state.isSignUpModalOpen
                }

        default:
            return state
    }
}
export default modalReducer