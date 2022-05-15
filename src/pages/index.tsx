import type { NextPage } from "next";
import {
  Heading,
  Flex,
  Avatar,
  Box,
  Divider,
  Icon,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";

import { AiFillPlusCircle } from "react-icons/ai";
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
