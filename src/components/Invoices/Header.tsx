import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { ButtonElement } from "../Button";
import { SelectStatusInvoices } from "./SelectStatusInvoices";

export function Header() {
  const [buttonTitle, setButtonTitle] = useState("");
  const [title, setTitle] = useState("");

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  useEffect(() => {
    switch (isWideVersion) {
      case true:
        setButtonTitle("New Invoice");
        setTitle("there are 7 total invoices");
        break;
      case false:
        setButtonTitle("New");
        setTitle("7 invoices");
        break;
      default:
        setButtonTitle("New Invoice");
        setTitle("there are 7 total invoices");
    }
  }, [isWideVersion]);

  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent={["space-around", "space-between"]}
      w="100%"
    >
      <Box>
        <Heading fontFamily="fonts.body" fontWeight="bold" color="white">
          Invoices
        </Heading>
        <Text color="gray" fontWeight="500">
          {title}
        </Text>
      </Box>

      <Flex alignItems="center" gap="4">
        <SelectStatusInvoices />
        <NextLink href="/NewInvoice" passHref>
          <Link>
            <ButtonElement
              pl="2px"
              mr="2"
              bg="purple.dark"
              leftIcon={<AiFillPlusCircle size={40} />}
            >
              {buttonTitle}
            </ButtonElement>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
}
