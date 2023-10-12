import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useColorMode } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Content({ children }: Props) {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "dark" ? "dark.200" : "white"}
      py={8}
      minHeight="100vh"
    >
      <Container maxW="6xl" >{children}</Container>
    </Box>
  );
}

export default Content;
