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

        case "SET_ACTIVE_USERNAME":
                return{
                    ...state,
                    acticeUsername : payload
                }
        default:
            return state
    }
}
export default modalReducer