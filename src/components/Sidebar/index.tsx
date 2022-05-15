import {
  Avatar,
  Box,
  Divider,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AiFillPieChart } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";

export function Sidebar() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      display="flex"
      w={["100%", "6%"]}
      h={["17%", "100%"]}
      alignItems="space-between"
      justifyContent="space-between"
      flexDirection={["row", "column"]}
      borderRightRadius={isWideVersion ? "20px" : "0"}
      bg="blue.darkMedium"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="purple.light"
        borderRightRadius={["6px", "20px"]}
        h={["100%", "90px"]}
        w={["6", "100%"]}
      >
        <Icon as={AiFillPieChart} color="white" fontSize={[10, 40]} />
      </Box>
      <Box
        display="flex"
        flexDirection={["row", "column"]}
        gap="4"
        alignItems="center"
        justifyContent="space-around"
      >
        <Icon as={BsFillSunFill} w={["2", "7"]} color="gray" />
        <Divider
          orientation={isWideVersion ? "horizontal" : "vertical"}
          borderWidth="1"
          w="100%"
          borderColor="gray"
        />
        <Box
          display="flex"
          h="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            src="https://github.com/nicholaslima.png"
            w={["5", "10"]}
            h={["5", "10"]}
            name="nicholas lima"
            mr={["5", "0"]}
            mb={["0", "5"]}
          />
        </Box>
      </Box>
    </Box>
  );
}
