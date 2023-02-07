import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  chakra,
  Box,
  Flex,
  Text,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Image,
  CloseButton,
  background,
  useColorMode,
  color, 
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Home from "./Home";
import { FiMoon } from "react-icons/fi";
export default function Nav(){
  const mobileNav = useDisclosure();

  const navigate = useNavigate()

  const login = () =>{
    navigate('/Login')
  }


  return (
    <React.Fragment>
      <chakra.header
      overflow="hidden"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        zIndex="0"
        bg={'white'}
      >
        <Flex bg={'none'} alignItems="center" justifyContent="space-between" mx="auto" zIndex="1">
          <Flex bg={'none'}>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
              bg={'white'}
            >
              
              <VisuallyHidden bg={'white'} >tripsa</VisuallyHidden>
              
            </chakra.a>
            <chakra.h1  color={"#2596be"} fontSize="xl" fontWeight="medium" ml="2">
            <Link  to={"/Home"}>
              <Text bg={'white'} fontSize={28} fontWeight={"bold"} cursor={"pointer"}>
              NationalDay
              </Text>
              </Link>
            </chakra.h1>
          </Flex>
          <HStack bg={'white'} display="flex" alignItems="center" spacing={1}>
            <HStack bg={'white'}
              spacing={1}
              mr={1}
              zIndex="1"
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            > 
              
              <Button onClick={login} variant="ghost">SIGN IN</Button>
              
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
                zIndex={1}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button onClick={login} w="full" variant="ghost">
                  SIGN IN
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};