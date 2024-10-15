// react imports
import { FC } from 'react'
// third party libraries imports
import { Grid, GridItem, Button, useColorMode } from '@chakra-ui/react'
// file system imports
import { Navbar } from './features'

const App: FC = () => {
  const { toggleColorMode } = useColorMode()
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
        Aside
      </GridItem>

      <GridItem as="main" colSpan={{ base: 6, lg: 5 }}>
        <Button backgroundColor={'green'} onClick={toggleColorMode}>Switch color mode</Button>

      </GridItem>

      <GridItem as="footer" colSpan={6}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
