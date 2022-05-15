import { Box, Flex, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";

export function Invoices() {
  return (
    <VStack spacing="3" mt="20">
      <Flex
        justify="space-around"
        align="center"
        w="100%"
        bg="blue.darkMedium"
        borderRadius="10px"
        p="3"
      >
        <Text color="white">#sadsdf</Text>
        <Text color="gray">due 15 jan 2022</Text>
        <Text color="gray">John Morrison</Text>
        <Text color="white">$ 1.500</Text>
        <Box
          display="flex"
          alignItems="center"
          color="green.light"
          borderRadius="5px"
          fontWeight="bold"
          bg="green.opacity"
          px="3"
          py="1"
        >
          <Icon as={GoPrimitiveDot} color="green.light" fontSize="20" mr="2" />
          Paid
        </Box>
        <Icon as={IoIosArrowForward} color="gray"></Icon>
      </Flex>

      <Flex
        justify="space-around"
        align="center"
        w="100%"
        bg="blue.darkMedium"
        borderRadius="10px"
        p="3"
      >
        <Text color="white">#sadsdf</Text>
        <Text color="gray">due 15 jan 2022</Text>
        <Text color="gray">John Morrison</Text>
        <Text color="white">$ 1.500</Text>
        <Box
          display="flex"
          alignItems="center"
          color="orange.darkOrange"
          borderRadius="5px"
          fontWeight="bold"
          bg="orange.opacity"
          px="3"
          py="1"
        >
          <Icon
            as={GoPrimitiveDot}
            color="orange.darkOrange"
            fontSize="20"
            mr="2"
          />
          Pending
        </Box>
        <Icon as={IoIosArrowForward} color="gray"></Icon>
      </Flex>

      <Flex
        justify="space-around"
        align="center"
        w="100%"
        bg="blue.darkMedium"
        borderRadius="10px"
        p="3"
      >
        <Text color="white">#sadsdf</Text>
        <Text color="gray">due 15 jan 2022</Text>
        <Text color="gray">John Morrison</Text>
        <Text color="white">$ 1.500</Text>
        <Box
          display="flex"
          alignItems="center"
          color="white.light"
          borderRadius="5px"
          fontWeight="bold"
          bg="white.opacity"
          px="3"
          py="1"
        >
          <Icon as={GoPrimitiveDot} color="white.light" fontSize="20" mr="2" />
          Draft
        </Box>
        <Icon as={IoIosArrowForward} color="gray"></Icon>
      </Flex>

      <Flex
        justify="space-around"
        align="center"
        w="100%"
        bg="blue.darkMedium"
        borderRadius="10px"
        p="3"
      >
        <Text color="white">#sadsdf</Text>
        <Text color="gray">due 15 jan 2022</Text>
        <Text color="gray">John Morrison</Text>
        <Text color="white">$ 1.500</Text>
        <Box
          display="flex"
          alignItems="center"
          color="green.light"
          borderRadius="5px"
          fontWeight="bold"
          bg="green.opacity"
          px="3"
          py="1"
        >
          <Icon as={GoPrimitiveDot} color="green.light" fontSize="20" mr="2" />
          Paid
        </Box>
        <Icon as={IoIosArrowForward} color="gray"></Icon>
      </Flex>
    </VStack>
  );
}
