import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const home = () => {
    navigate("/NationalDay");
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
      console.log(`Welcome back, ${storedUserName}`);
    }
  }, []);

  const handleLogin = () => {
    if (!userName || !password) {
      setError("Please enter both user name and password");
      return;
    }
    localStorage.setItem("userName", userName);
    console.log(`Welcome, ${userName}`);
    home();
  };

  return (
    <Box
      m={"auto auto"}
      display={"grid"}
      gridAutoColumns={"2"}
      width={"300px"}
      color={"#5B8FB9"}
      fontWeight={"bold"}
    >
      <Box mb={10} fontSize={"32px"}>
        LOGIN
      </Box>
      <Input
        p={6}
        backgroundColor={"#eee"}
        placeholder="User name: "
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        p={6}
        backgroundColor={"#eee"}
        mt={15}
        placeholder="Password: "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Box color="red">{error}</Box>}
      <Box width={"300px"} mt={15}>
        <Button
          color={"#fff"}
          width={"300px"}
          backgroundColor={"#6096B4"}
          onClick={handleLogin}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
