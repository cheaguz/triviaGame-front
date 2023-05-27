import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { getCategories } from '../Services/api'
import { useSelector } from 'react-redux'

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()
  const { logged } = useSelector(state => state)

  useEffect(() => {
    getCategories()
      .then(res => setCategories(res.data.data))
      .catch(err => console.log(err))
  }, [])

  const colors = ["orange", "red", "teal", "blue", "pink", "gray", "blackAlpha"];


  return (
    <>
      {!logged ?
        <p> </p>
        :
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {categories.map((cat, k) => (
            <Button
              colorScheme={colors[k]}
              key={k}
              onClick={() => navigate(`/game/category=${cat._id}`)
              }>
              {cat.name}
            </Button>
          ))}
        </Grid>
      }
    </>

  )
}