import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      900: "#0B0B13ff",
      800: "#141625ff",
      700: "#1F213Aff",
      600: "#121421ff",
    },
    green: {
      light: "hsla(174, 63%, 51%, 1)",
      opacity: "hsla(174, 29%, 47%, 0.2)",
    },
    orange: {
      light: "#FE8F04ff",
      opacity: "hsla(28, 43%, 45%, 0.2)",
    },
    gray: "#9799A8ff",
    white: {
      light: "hsla(210, 50%, 99%, 1)",
      opacity: "hsla(210, 50%, 99%, 0.1)",
    },
    purple: {
      dark: "#7B5CF5ff",
      light: "#9278FFff",
    },
    mirage: "#1e2139",
    ebony: "#252945",
    selago: "#dfe3fa",
    baliHai: "#888eb0",
    shipCove: "#7e88c3",
    vulcan: "#0c0e16",
    burntSienna: "#ec5757",
    monaLisa: "#ff9797",
    whisper: "#f8f8fb",
    offWhite: "#f9fafe",
    mirage2: "#141625",
    darkAccent: "#494e6e",
    otherDark: "#373b53",
  },
  styles: {
    global: {
      body: {
        bg: "blue.600",
        fontSize: "0.8rem",
      },
    },
  },
  fonts: {
    body: "Spartan",
  },
});
