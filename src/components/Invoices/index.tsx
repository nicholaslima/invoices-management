import { Avatar, Box } from "@chakra-ui/react";
import { useToggle } from "../../hooks/useToggle";
import { Header } from "./Header";
import { ListInvoices } from "./ListInvoices";

export function Invoices() {
  const { stateToggle, toggle } = useToggle();
  return (
    <>
      <Box
        position="absolute"
        zIndex="1"
        h={stateToggle ? "0" : "100%"}
        w={stateToggle ? "0" : "100%"}
        bg="black"
        opacity={stateToggle ? "1" : "0.7"}
        onClick={() => toggle()}
      />
      <Box
        mx={["2", "auto"]}
        maxW={["100%", "80%", "800px"]}
        w="100%"
        mt={["110px", "120px", "110px", "100px", "80px"]}
        p={["2", "1", "0"]}
        h="100vh"
      >
        <Header />
        <ListInvoices />
      </Box>
    </>
  );
}
