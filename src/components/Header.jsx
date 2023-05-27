import React from 'react'
import { Box, Center, Divider, Button, Icon, Tooltip,Text  } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MdHome, MdLogout } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/userActions';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, logged } = useSelector(state => { return state })
  return (
    <>
      <Box w='100%' h='40px' bgColor='blackAlpha.800' display='flex' justifyContent='space-between' alignItems={'center'} textAlign={'center'}>
        {logged &&
          <>


            <Tooltip label='Home'>
              <Button onClick={() => navigate('/')} variant='link' ml={5}>
                Home
              </Button>
            </Tooltip>

            <Tooltip label='Ranking'>
              <Button onClick={() => navigate('/ranking')} variant='link' ml={5}>
                Ranking
              </Button>
            </Tooltip>

         {/*    <Text color={'white'}> Bienvenido { user } </Text> */}
            
            <Tooltip label='logout'>
              <Button variant='link' ml={5} onClick={() => dispatch(logOut())} >
                <Icon as={MdLogout} w={8} h={8} />
              </Button>
            </Tooltip>
          </>
        }

      </Box>

      <Center height='20px'>
        <Divider orientation='vertical' />
      </Center>
    </>
  )
}
