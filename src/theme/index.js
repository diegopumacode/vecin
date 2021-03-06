import { extendTheme } from '@chakra-ui/react'
import { Button } from './Button'
import {Text} from './Text'
const styles = {
    global: (props) => ({
        '*': {
            fontFamily: 'Poppins'
        },
    }),
}

const colors = {
    primary: "#A775FE",
    secondary: "#F7F9F9",
    brand:"#FBDA04",
    highlight: "#7009B4",
    danger: "#F32D46",
    warning: "#F7D301"
}

const components = {
    Button,
    Text
}

export const theme = extendTheme({ colors, styles, components })
