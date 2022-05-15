import { Box, Flex, Icon, Text } from "@chakra-ui/react";
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
      justify="space-around"
      align="center"
      w="100%"
      bg="blue.darkMedium"
      borderRadius="10px"
      p="3"
    >
      <Text color="white">#{data.id}</Text>
      <Text color="gray">{data.date}</Text>
      <Text color="gray">{data.nameCustomer}</Text>
      <Text color="white">$ {data.value}</Text>
      <Box
        display="flex"
        alignItems="center"
        color={statusColor.color}
        borderRadius="5px"
        fontWeight="bold"
        bg={statusColor.background}
        px="3"
        py="1"
      >
        <Icon
          as={GoPrimitiveDot}
          color={statusColor.color}
          fontSize="20"
          mr="2"
        />
        {status}
      </Box>
      <Icon as={IoIosArrowForward} color="gray"></Icon>
    </Flex>
  );
}
