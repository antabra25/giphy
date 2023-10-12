import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  IconButton,
  Link,
  Stack,
  useColorMode,
  useTheme
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleDarkMode = () => {
    toggleColorMode();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box  bg={isDarkMode ? "dark.100" : "light.300"} py={3}>
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Heading as="h1" size="md" color="white">
          Mi Sitio
        </Heading>
        <Spacer />
        <Stack direction="row" spacing={4}>
          <Link href="#" color="white">
            Inicio
          </Link>
          <Link href="#" color="white">
            Acerca de
          </Link>
          <Link href="#" color="white">
            Servicios
          </Link>
          <Link href="#" color="white">
            Contacto
          </Link>
        </Stack>
        <IconButton
          aria-label="Cambiar modo de color"
          icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
          onClick={handleToggleDarkMode}
          colorScheme={isDarkMode ? "gray" : "light.100"}
          ml={4}
          
        />
      </Flex>
    </Box>
  );
}

export default NavBar;
