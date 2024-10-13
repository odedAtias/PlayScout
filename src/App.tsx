import { Grid, GridItem } from '@chakra-ui/react'
import { FC } from 'react'

const App: FC = () => {
  return (
    <Grid
      templateColumns='repeat(6, 1fr)'
      templateRows='auto 1fr auto'
      minHeight='100vh'
    >
      <GridItem as="nav" colSpan={6} backgroundColor={'red'}>
        Navbar
      </GridItem>

      <GridItem as="aside" colSpan={1} backgroundColor={'green'} display={{ base: 'none', lg: 'block' }}>
        Aside
      </GridItem>

      <GridItem as="main" colSpan={{base : 6, lg: 5}} backgroundColor={'blue'}>
        Main
      </GridItem>

      <GridItem as="footer" colSpan={6} backgroundColor={'yellow'}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
