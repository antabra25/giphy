import { Box,Image } from "@chakra-ui/react"

interface Props{
  image:string,
  width:string,
  height:string
}

export const GipCard = ({image,width,height}:Props) => {
  return (
    <>
    <Box>
      <Image src={image}  w={width} h={height}/>
    </Box>
    </>
  )
}
