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
    md: true,
    sm: false,
    lg: true,
  });

  const avatarSize = useBreakpointValue({
    base: "md",
    md: "md",
    sm: "sm",
    xs: "xs",
  });

  return (
    <Box
      display="flex"
      position="fixed"
      w={["100%", "100%", "6%"]}
      h={["14%", "16%", "100%"]}
      zIndex="10"
      alignItems="space-between"
      justifyContent="space-between"
      flexDirection={["row", "row", "column"]}
      borderRightRadius={isWideVersion ? "20px" : "0"}
      bg="blue.darkMedium"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="purple.light"
        borderRightRadius={["6px", "20px"]}
        h={["100%", "100%", "90px"]}
        w={["18%", "16%", "100%"]}
      >
        <Icon as={AiFillPieChart} color="white" fontSize={[25, 35, 40]} />
      </Box>
      <Box
        display="flex"
        flexDirection={["row", "row", "column"]}
        gap="7"
        alignItems="center"
        justifyContent="space-around"
      >
        <Icon as={BsFillSunFill} w={["3", "7"]} color="gray" />
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
            size={avatarSize}
            name="nicholas lima"
            mr={["5", "5", "0"]}
            mb={["0", "0", "5"]}
          />
        </Box>
      </Box>
    </Box>
  );
}
