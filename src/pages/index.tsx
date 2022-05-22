import type { NextPage } from "next";
import { Avatar, Box, Flex } from "@chakra-ui/react";

import { Sidebar } from "../components/Sidebar";
import { Invoices } from "../components/Invoices";
import { NewInvoice } from "../pages/NewInvoice";
import { useToggle } from "../hooks/useToggle";

const Home: NextPage = () => {
  return (
    <>
      <NewInvoice />
      <Flex flexDirection={["column", "row"]}>
        <Sidebar />
        <Invoices />
      </Flex>
    </>
  );
};

export default Home;
