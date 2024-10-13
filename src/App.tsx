import { Grid, GridItem } from '@chakra-ui/react'
import { FC } from 'react'

const App: FC = () => {
  return (
    <Grid
      templateColumns='repeat(6, 1fr)'
      templateRows='auto 1fr auto'
      minHeight='100vh'
    >
      <GridItem as="nav" colSpan={6}>
        Navbar
      </GridItem>

      <GridItem as="aside" colSpan={2}>
        Aside
      </GridItem>

      <GridItem as="main" colSpan={4}>
        Main
      </GridItem>

      <GridItem as="footer" colSpan={6}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
