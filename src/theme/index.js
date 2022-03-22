import { extendTheme } from "@chakra-ui/react"

const styles = {
  global: (props) => ({
    '*': {
      fontFamily: 'Poppins'
    },
  }),
}

const colors = {
  primary: "#A775FE",
  secondary: "",
  highlight: "",
  warning: "",
  danger: "",
}


export const theme = extendTheme({ colors, styles })
