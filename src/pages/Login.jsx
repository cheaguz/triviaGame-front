import React ,{ useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Container,
    Button
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/userActions';

export const Login = () => {
  const {id,token,user,logged} = useSelector(state => {
    return state
  })

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [form , setForm ] = useState({
    email : '',
    password : ''
  })
 
const handleChange = (e) => {
  setForm({...form,[e.target.name] : e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault()  
  const {email,password} = form;
  dispatch( userLogin({ email,password }) )
}

  return (
    <Container>     
        <FormControl>
            <FormLabel>Email </FormLabel>
            <Input type='email' onChange={handleChange} name='email' />
            <FormLabel>Password</FormLabel>
            <Input type='password' onChange={handleChange} name='password' />
            <Button type='submit' onClick={handleSubmit}>Login</Button>
           
        </FormControl>
    </Container>
  )
}
