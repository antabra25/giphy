import { InputSearch } from "./components/InputSearch";
import LayOut from "./components/Layout/LayOut";
import {
  ChakraProvider,
  extendTheme,
  ColorModeScript,
  Heading,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findGiphy } from "./services/giphyService";
import { GifList } from "./components/GifList";

const colors = {
  config: {
    initialColorMode: "light",
  },
  colors: {
    light: {
      100: "#C0C3FF",
      200: "#979CFF",
      300: "#6E75FF",
      400: "#454DFF",
      500: "#222A68",
      600: "#1A2154",
      700: "#11163F",
      800: "#090C2B",
      900: "#000510",
    },
    dark: {
      100: "#1a202c",
      200: "#2d3748",
      300: "#4a5568",
      400: "#718096",
      500: "#a0aec0",
      600: "#cbd5e0",
      700: "#e2e8f0",
      800: "#edf2f7",
      900: "#f7fafc",
    },
  },
};

const theme = extendTheme({ ...colors });

const App = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);

  const findGifs = async (e) => {
    const res = await findGiphy(search);
    if (res.status === 200) {
      const { data } = res;
      setGifs(data.data);
    }
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <LayOut>
          <Heading my={2}>Buscador Giphy </Heading>
          <HStack>
            <InputSearch
              value={search}
              name="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={findGifs}>Buscar</Button>
          </HStack>
          <GifList items={gifs} />
        </LayOut>
      </ChakraProvider>
    </>
  );
};

export default App;
