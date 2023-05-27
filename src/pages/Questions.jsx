import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Button, Image, Progress, Box, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getQuestion, validateResponse } from '../Services/api';
import { useSelector } from 'react-redux';


export const Questions = () => {
  const [value, setValue] = useState(5)
  const [question, setQuestion] = useState([])
  const [loading, setLoading] = useState(true)
  const [level, setLevel] = useState(0)
  const navigate = useNavigate();
  const { id } = useParams();


  const userState = useSelector(state => {
    return state
  })


  const fetchQuestion = (paramId) => {
    getQuestion(paramId)
      .then(res => {
        setQuestion(res.data.data)
        setLevel(res.data.data.level)
        setLoading(false)
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchQuestion(id)
  }, [])

  const validate = (resp) => {
    const id = question._id;
    const userId = userState.id
    
    validateResponse(id, {
      userResponse: resp,
      userId: userId
    })
      .then(res => {
        if (res.data.msg == 'Felicidades sumaste 10 puntos al ranking') {
          alert(res.data.msg)
          navigate('/ranking')
        } else {
          alert(res.data.msg)
          setLevel(res.data.data.level)
          setValue(() => value + 5)
          if (res.data.msg == 'Correcto!') {
            setQuestion(res.data.data)
          }
        }
      })
      .catch(err => console.log(err))
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

      {loading ? <Spinner size='xl' />
        :
        <>
          Level : {level}
          <Container maxW={'80%'}>
            <Progress hasStripe value={value} isAnimated={true} />
          </Container>
          <Container
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDir='column'
            gap={2}
            textAlign='center'
            maxW={700}
            maxH={'100vh'}
          >
            {question.question}

            <Image src={question.image} maxH={300} maxW={400} align='center' />
            {question?.answers?.map((answer, i) => (
              <Button w={'100%'} key={i} color={'#4A5568'} onClick={() => validate(answer)}>{answer}</Button>
            ))}
          </Container>
        </>
      }
    </motion.div>
  )
}
