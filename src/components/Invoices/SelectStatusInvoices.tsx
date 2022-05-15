import { Flex, Select } from "@chakra-ui/react";
import { useCallback, useState } from "react";

export function SelectStatusInvoices() {
  const [status, setStatus] = useState();

  const changeStatus = useCallback((a: any) => {
    setStatus(a.target.value);
  }, []);

  return (
    <Select
      color="white"
      border="0px solid blue.dark"
      outline="0px"
      bg="blue.dark"
      w="180px"
      fontWeight="bold"
      iconColor="gray"
      onChange={(a) => changeStatus(a)}
    >
      <option style={{ backgroundColor: "#141625ff" }} value="">
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
  );
}
