// react imports
import { FC } from 'react'
// third party libraries imports
import { Grid, GridItem } from '@chakra-ui/react'
// FS imports (Named imports)
import { Navbar, Main, Aside } from './layout'

const App: FC = () => {
  return (
    <Grid
      templateColumns='repeat(6, 1fr)'
      templateRows='auto 1fr auto'
      minHeight='100vh'
    >
      <GridItem as="nav" colSpan={6}>
        <Navbar />
      </GridItem>

      <GridItem as="aside" colSpan={1} display={{ base: 'none', lg: 'block' }}>
        <Aside />
      </GridItem>

      <GridItem as="main" colSpan={{ base: 6, lg: 5 }}>
        <Main />
      </GridItem>

      <GridItem as="footer" colSpan={6}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App;