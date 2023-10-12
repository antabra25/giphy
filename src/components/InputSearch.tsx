import { Input } from "@chakra-ui/react";

interface InputPros{
  value:string,
  name:string,
  onChange:(e)=>void
}
export const InputSearch = ({value,name,onChange}:InputPros) => {

  return <>
  <Input placeholder="Buscar ..." size="md" value={value} name={name} onChange={onChange}/>
  
  </>;
};
