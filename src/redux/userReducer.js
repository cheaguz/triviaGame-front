const initialState = {
    id : 0,
    token :"",
    user : "",
    logged : false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                id : action.payload.id,
                token : action.payload.token,
                user : action.payload.user,
                logged : true
            }
        case 'USER_LOGOUT':
            return {
                id : 0,
                token : "",
                user : "",
                logged : false
            }


        default:
            return state;
    }

}