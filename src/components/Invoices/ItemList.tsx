import { Box, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { useMemo } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export interface InvoiceData {
  id: string;
  date: string;
  value: string;
  nameCustomer: string;
}

interface ItemlistProps {
  status: "pending" | "paid" | "draft";
  data: InvoiceData;
}

export function ItemList({ status, data }: ItemlistProps) {
  const mdScreen = useBreakpointValue({
    md: true,
  });

  const statusColor = useMemo(() => {
    let color;
    let background;

    switch (status) {
      case "paid":
        color = "green.light";
        background = "green.opacity";
        break;

      case "pending":
        color = "orange.light";
        background = "orange.opacity";
        break;

      case "draft":
        color = "white.light";
        background = "white.opacity";
        break;
    }

    return {
      background,
      color,
    };
  }, []);
  return (
    <Flex
      justify="space-between"
      align="center"
      w="100%"
      bg="blue.700"
      _hover={{ borderColor: "purple.dark" }}
      borderRadius="7px"
      borderWidth="1px"
      transition="0.3s"
      borderColor="blue.700"
      px="4"
      py="7"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent="space-around"
        w="50%"
      >
        <Text color="white" fontWeight="bold" mb={["4", "4", "0"]}>
          <Box as="span" color="purple.light">
            #
          </Box>
          {data.id}
        </Text>
        <Text color="white">{data.date}</Text>
        {mdScreen && (
          <Text color="white" w="30%" textAlign="center">
            {data.nameCustomer}
          </Text>
        )}
        {!mdScreen && (
          <Text color="white" fontWeight="bold" fontSize="1.1rem" mt="2">
            $ {data.value}
          </Text>
        )}
      </Flex>

      <Flex
        flexDirection={["column", "column", "row"]}
        w="40%"
        justifyContent={["space-around", "space-between"]}
        h="100%"
      >
        {mdScreen && (
          <Text
            color="white"
            fontWeight="bold"
            mb={["2", "2", "0"]}
            fontSize="1.1rem"
          >
            $ {data.value}
          </Text>
        )}
        {!mdScreen && (
          <Text color="white" w="100%" textAlign="right" mb={["2", "7", "0"]}>
            {data.nameCustomer}
          </Text>
        )}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          alignSelf="flex-end"
          color={statusColor.color}
          borderRadius="5px"
          fontWeight="bold"
          bg={statusColor.background}
          py="2"
          w="110px"
        >
          <Icon
            as={GoPrimitiveDot}
            color={statusColor.color}
            fontSize="20"
            mr="2"
          />
          {status}
        </Box>
        <Icon
          display={["none", "none", "block"]}
          as={IoIosArrowForward}
          color="purple.dark"
        ></Icon>
      </Flex>
    </Flex>
  );
}
