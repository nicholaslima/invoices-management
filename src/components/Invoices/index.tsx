import { Avatar, Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { ListInvoices } from "./ListInvoices";

export function Invoices() {
  return (
    <Box
      mx={["2", "auto"]}
      maxW={["100%", "80%", "800px"]}
      w="100%"
      mt={["110px", "120px", "110px", "100px", "80px"]}
      p={["2", "1", "0"]}
    >
      <Header />
      <ListInvoices />
    </Box>
  );
}
