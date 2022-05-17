import type { NextPage } from "next";
import { Avatar, Flex } from "@chakra-ui/react";

import { Sidebar } from "../components/Sidebar";
import { Invoices } from "../components/Invoices";

const Home: NextPage = () => {
  return (
    <Flex flexDirection={["column", "row"]} h="100vh">
      <Sidebar />
      <Invoices />
    </Flex>
  );
};

export default Home;
