import React from 'react'
import { Container,Image,Box,Divider,Center  } from '@chakra-ui/react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Categories } from '../components/Categories'
import { useSelector } from 'react-redux'

export const Home = () => {
  const {id,user,token,logged} = useSelector(state => {
    return state
  })

  return (
    <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} justifyContent='center' textAlign='center'>
      <Container textAlign={'center'}>
          <p>Welcome to Trivia game</p>
          <Box display='flex' justifyContent={'center'}>
            <Image src='https://cdn.todojuegosgratis.es/img/juegos/trivia-quiz.jpg'  />
          </Box>
        </Container>
        <Center height='50px'>
          <Divider orientation='vertical' />
        </Center>   
       <Categories />
      <Link  to='/send-questions'> Envia tus preguntas.</Link>
    </motion.div>
  )
}
