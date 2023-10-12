import { Flex } from "@chakra-ui/react";
import { GipCard } from "./GipCard";

interface Gif {
  items: any[];
}

export const GifList = ({ items }: Gif) => {
   
  return (
    <>
      <Flex wrap="wrap" direction="row" justify="center" my={4} gap={2}>
        {items.map((item) => (
          <GipCard image={item.images.downsized_medium.url} height={item.images.downsized_medium.height} width={item.images.downsized_medium.width} />)
    )}
      </Flex>
    </>
  );
};
