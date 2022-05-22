import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Provider } from "../hooks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
