import { Flex, Select, useBreakpointValue } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useState } from "react";

export function SelectStatusInvoices() {
  const [status, setStatus] = useState();
  const [descriptionSelect, setDescriptionSelect] = useState("");

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const changeStatus = useCallback((a: any) => {
    setStatus(a.target.value);
  }, []);

  useEffect(() => {
    isWideVersion
      ? setDescriptionSelect("Filter by Status")
      : setDescriptionSelect("Filter");
  }, [isWideVersion]);

  return (
    <Select
      color="white"
      border="0px solid blue.dark"
      outline="0px"
      bg="blue.600"
      w={["90px", "90px", "180px"]}
      fontWeight="bold"
      iconColor="gray"
      onChange={(a) => changeStatus(a)}
    >
      <option style={{ backgroundColor: "#141625ff" }} value="">
        {descriptionSelect}
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
