import React , { useState } from 'react'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Container,
    Button
  } from '@chakra-ui/react'


export const Register = () => {
  const [form , setForm] = useState({
    user : "",
    name : "",
    email : "",
    password : ""
  });

  const handleChange = (e) => {
    setForm({...form,[e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
  }


  return (
    <Container>
    <FormControl>
        <FormLabel>Usuario </FormLabel>
        <Input type='text' name='user' onChange={handleChange} />

        <FormLabel>Nombre </FormLabel>
        <Input type='text' name='name' onChange={handleChange}/>

        <FormLabel>Email </FormLabel>
        <Input type='email' name='email' onChange={handleChange} />

        <FormLabel>Password</FormLabel>
        <Input type='password' name='password' onChange={handleChange} />

        <Button type='submit' onClick={handleSubmit}>Registro</Button>
    </FormControl>
</Container>
  )
}
