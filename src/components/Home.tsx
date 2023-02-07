import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import Login from './Login'
import Router from './Router'

function Home() {
    const navigate = useNavigate()

    const login = () =>{
        navigate("/LOGIN")
    }
  return (
    <Box  mt={50} mr-ml={"auto"} alignItems={"center"}>
        <Text id='title1' padding={8} color={"black"} fontSize={"32px"}>
            مالحد منه، الله اللي عزنا
        </Text>
        <Box justifyContent={"center"} display={'flex'} mt={8} gap={15}>
            <Button backgroundColor={'#6096B4'} onClick={login} >
                تسجيل
            </Button>

            <Button backgroundColor={'#6096B4'}>
                تسجيل جديد
            </Button>
        </Box>

    </Box>
  )
}

export default Home
