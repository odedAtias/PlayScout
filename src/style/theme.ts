// Third party imports
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,

};

const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.200',
    },
  }),
};

const theme = extendTheme({ config, styles })

export default theme