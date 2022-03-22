import { extendTheme } from '@chakra-ui/react'
import { Button } from './Button'
const styles = {
    global: (props) => ({
        '*': {
            fontFamily: 'Poppins'
        },
    }),
}

const colors = {
    primary: "#A775FE",
    secondary: "#CBABE1",
    brand:"#FBDA04",
    highlight: "#7009B4",
    danger: "#F32D46",
    warning: "#F7D301"
}

const components = {
    Button
}

export const theme = extendTheme({ colors, styles, components })
