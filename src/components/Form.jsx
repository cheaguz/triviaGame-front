import React from 'react'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

export const Form = () => {
  return (
    <div>
        <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormHelperText>We'll nevesr share your email.</FormHelperText>
        </FormControl>
    </div>
  )
}
