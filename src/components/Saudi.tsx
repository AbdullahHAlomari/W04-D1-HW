import React, { useState } from "react";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, chakra, Divider, Flex, Heading, HStack, Icon, Image, Input, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";


export default function Saudi(){

    const [selectedId, setSelectedId] = useState("");
const [searchValue, setSearchValue] = useState("");

const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
setSearchValue(event.target.value);
};


  return (
    // -------------Heros---------------
    
      


      // -------------carousel---------

    <Box zIndex="0"> 
    <Flex
      w={"90%"}
      p={0}
      alignItems="center"
      justifyContent="center"
      margin={"10px auto"}
    >
        
         


      
    </Flex>

    
            {/* ----------------Hero------------- */}
            



    {/* -----------------Article------------- */}

    <Flex alignItems="center" justifyContent="center" margin={"10px auto"}>
<Input placeholder="Search for a city: Ex. Riyadh" width={'350px'} bgColor={'white'} border={'1px solid'} type="text" value={searchValue} onChange={handleSearch} />
<Button ml={15} onClick={() => setSelectedId(searchValue)}>Search</Button>
</Flex>
    


    <Box className="textbody">
        <Text id="titlestep" fontSize={'48px'} marginTop={'40px'} color={"#2596be"}>
        Celebrate with us
        </Text>
        </Box>

        {/* ----------------------------Cards--------------------- */}

        <SimpleGrid bgColor={'red'}  columns={3} spacing={10} bg={"#eee"} padding={"70px 100px 100px 100px"}>
        <Card id="Riyadh" w='100%' margin={"0px auto"} boxShadow={"xl"} style={{ display: selectedId === "Riyadh" || selectedId === "" ? "block" : "none" }}>
<CardBody>
<Image h={"40vh"}
src='https://www.abouther.com/sites/default/files/2019/09/17/main_-_ksa_national_day.jpg'
alt='Green double couch with wooden legs'
borderRadius='lg'
/>
<Stack mt='6' spacing='6'>
<Heading size='md'>Riyadh</Heading>
<Text color={"#6d6e6e"}>
Riyadh is the capital and largest city of Saudi Arabia. It is a modern, rapidly developing city that serves as the center of politics, finance, and culture in the country. It has a rich history and is known for its historic sites, museums, and modern shopping centers. It is also a hub for international businesses and a popular destination for tourists.
</Text>
</Stack>
</CardBody>
</Card>


<Card id="Ula" w='100% ' margin={"0px auto"} boxShadow={"xl"} style={{ display: selectedId === "Khobar" || selectedId === "" ? "block" : "none" }}>
<CardBody>
<Image h={"40vh"}
src='https://clcdn.spa.gov.sa/image-resizer/h600/galupload/normal/201809/000-818165771537624626632.jpg'
alt='Green double couch with wooden legs'
borderRadius='lg'
/>
<Stack mt='6' spacing='6'>
<Heading size='md'>Khobar</Heading>
<Text color={"#6d6e6e"}>
Al-Khobar is a city in the Eastern Province of Saudi Arabia. It is a major commercial and residential center and is known for its modern infrastructure, high-rise buildings, and extensive shopping centers. It is also a popular tourist destination and attracts visitors for its beaches and water activities on the Arabian Gulf coast.
</Text>
</Stack>
</CardBody>
</Card>


<Card id="Jeddah" w='100%' margin={"0px auto"} boxShadow={"xl"} style={{ display: selectedId === "Jeddah" || selectedId === "" ? "block" : "none" }} >
  <CardBody>
    <Image h={"40vh"}
      src='https://pbs.twimg.com/media/EidaQHEWAAE0wbx.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='6'>
      <Heading size='md'>Jeddah</Heading>
      <Text color={"#6d6e6e"}>
      Jeddah is a city in Kingdom of Saudi Arabia, located on the Red Sea coast. It is the second largest city in the country and is a major commercial center, cultural hub, and tourist destination. It is also an important Islamic pilgrimage site, Jeddah have a lot of great places to visit and the gateway to the holy city of Mecca.

      </Text>
    </Stack>
  </CardBody>
</Card>

    </SimpleGrid >



        {/* ---------------Article------------- */}
        
        <Box className="textbody">
        <Text id="titlestep" fontSize={'36px'} marginTop={'80px'} color={"#000"} textAlign={"left"} marginLeft={"100px"}>
        Traditions of Saudi Arabia
        </Text>
        </Box>

<Flex
      bg=""
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        w={{ lg: "92%" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://scth.scene7.com/is/image/scth/card-01-319')",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            Language{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          
Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions. English serves as an informal second language in the Kingdom and is spoken by a large section of its society. All road signs are bilingual, showing information in both Arabic and English. 
          </chakra.p>

        </Box>
      </Box>
    </Flex>

    {/* --------------Second Article------------- */}

    <Flex
      bg="#eee"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        w={{ lg: "92%" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >

<Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            Culture{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          
          Saudi Arabia’s rich heritage and traditions have been shaped by its position as a historic trade hub and the birthplace of Islam. In recent years, the Kingdom has undergone a significant cultural transformation, evolving centuy-old customs to fit the contemporary world we live in today.
          </chakra.p>

        </Box>
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://scth.scene7.com/is/image/scth/card-02-303')",
            }}
          ></Box>
        </Box>

        
      </Box>
    </Flex>
    
    </Box>



    
    
    
  );
};


// --------------------------------



