import { whiten } from "@chakra-ui/theme-tools"
export const Button = {
    // style object for base or default style
    baseStyle: {},
    // styles for differents sizes ("sm","md","lg")
    sizes: {},
    // styles for different visual variant ("outline","solid")
    variants: {
        primary: {
            bg: "primary",
            color: "white",
            _hover: {
                bg: whiten("primary", 20)
            }
        }
    },
    // defaults values for 'size' and 'variant'
    defaultProps: {}
}