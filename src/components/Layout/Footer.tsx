import {
  Box,
  Center,
  IconButton,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { useColorMode } from "@chakra-ui/react";

function Footer() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box bg={colorMode == "dark" ? "dark.100" : "gray.100"} py={4}>
      <Center>
        <VStack>
          <Stack direction="row" spacing={4}>
            <Link href="#" isExternal>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                colorScheme="blue"
                size="lg"
              />
            </Link>
            <Link href="#" isExternal>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                colorScheme="blue"
                size="lg"
              />
            </Link>
            <Link href="#" isExternal>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                colorScheme="blue"
                size="lg"
              />
            </Link>
          </Stack>
          <Stack direction="row">
            <Text as="small" fontWeight="400">
              Created by Anthony.M
            </Text>
          </Stack>
        </VStack>
      </Center>
    </Box>
  );
}

export default Footer;
