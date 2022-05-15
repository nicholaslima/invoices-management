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
      <Box mx="auto" maxW="800px" w="100%" mt="70px">
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Box>
            <Heading fontFamily="fonts.body" fontWeight="bold" color="white">
              Invoices
            </Heading>
            <Text color="gray" fontWeight="500">
              there are 7 total invoices
            </Text>
          </Box>

          <Flex alignItems="center" gap="4">
            <Select
              color="white"
              border="0px solid blue.dark"
              outline="0px"
              bg="blue.dark"
              w="180px"
              fontWeight="bold"
              iconColor="gray"
            >
              <option style={{ backgroundColor: "#141625ff" }} value="paid">
                Filter by Status
              </option>
              <option style={{ backgroundColor: "#141625ff" }} value="paid">
                paid
              </option>
              <option style={{ backgroundColor: "#141625ff" }} value="pending">
                pending
              </option>
              <option style={{ backgroundColor: "#141625ff" }} value="draft">
                draft
              </option>
            </Select>
            <Button
              display="flex"
              borderRadius="35"
              color="white"
              size="md"
              pl="2px"
              bg="purple.light"
              leftIcon={<AiFillPlusCircle size={40} />}
            >
              New Invoice
            </Button>
          </Flex>
        </Flex>
        <Invoices />
      </Box>
    </Flex>
  );
};

export default Home;
