import { login } from "../Services/api";


export const logIn = ({id,token,user}) => ({
    type : 'USER_LOGIN',
    payload : {id,token,user}
});

export const logOut = () => ({
    type : 'USER_LOGOUT'
})




export const userLogin = ({email,password}) => dispatch => {
    login({email,password})
    .then(res =>{
        console.log(res)
        alert("Login exitoso!")
        const { id,token,user } = res.data.data;
        dispatch( logIn({id,token,user}));
    })
    .catch(err => alert(err.response.data.msg) )
};



