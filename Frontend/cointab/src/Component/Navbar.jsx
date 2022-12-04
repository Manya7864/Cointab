import {
  Box,
  Flex,
  HStack,
  Button,
  Heading,
  Menu,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/action";

export default function Navbar() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const  {isAuth}     = useSelector((store) => store);
  console.log(isAuth);
  const  {email}  = useSelector((store) => store);
  console.log(email);
  const logoutHandler = () => {
    dispatch(logout());
    Navigate("/Login");
  };

  return (
    <>
      <Box py={[2, 3]} px={[null, 10]}>
        <Flex
          h={[10, 16]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={8} alignItems={"center"} margin={"auto"}>
            <Box>
              <RouterLink to={"/"}>
                <Heading textShadow="1px 1px #ff0000">HomePage</Heading>
              </RouterLink>
            </Box>
          </HStack>
          {isAuth ? (
            <Flex alignItems={"center"}>
    
                  <Button onClick={logoutHandler}>Logout</Button>
                  <Text ml={3} textAlign={"left"}>
                    Email : {email}
                  </Text>
               
            
            </Flex>
          ) : (
            <Flex alignItems={"center"}>
              <Button
                variant={"ghosted"}
                colorScheme={"blue"}
                size={["xs", "sm"]}
                mr={4}
              >
                <RouterLink to={"/Login"}>LOG IN</RouterLink>
              </Button>
              <Button
                variant={"outline"}
                color={"blue.400"}
                borderColor={"blue.400"}
                borderRadius={"sm"}
                _hover={{ color: "white", bg: "blue.400" }}
                size={["xs", "sm"]}
                mr={4}
                px={7}
                py={5}
              >
                <RouterLink to={"/Signup"}>SIGN UP</RouterLink>
              </Button>
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  );
}
