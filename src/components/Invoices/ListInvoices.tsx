import { VStack } from "@chakra-ui/react";
import { ItemList } from "./ItemList";

export function ListInvoices() {
  return (
    <VStack spacing="3" mt={["7", "7", "20"]}>
      <ItemList
        status="paid"
        data={{
          nameCustomer: "marco",
          date: "15 de set 2020",
          id: "RT3080",
          value: "1800",
        }}
      />
      <ItemList
        status="pending"
        data={{
          nameCustomer: "joão",
          date: "25 de out 2021",
          id: "eewwd",
          value: "100",
        }}
      />
      <ItemList
        status="draft"
        data={{
          nameCustomer: "mateus",
          date: "25 de jan 2018",
          id: "sdfsdf",
          value: "1400",
        }}
      />
      <ItemList
        status="paid"
        data={{
          nameCustomer: "lucas",
          date: "15 de fev 2021",
          id: "dwerew",
          value: "1500",
        }}
      />
    </VStack>
  );
}
