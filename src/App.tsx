// react imports
import { FC } from 'react'
// third party libraries imports
import { Grid, GridItem } from '@chakra-ui/react'
// file system imports
import { Navbar } from './features'
import useFetchGames from './hooks/useFetchGames';

const App: FC = () => {
  const { games, isLoading, error } = useFetchGames();
  console.log(games)

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

      {<GridItem as="main" colSpan={{ base: 6, lg: 5 }}>
        Main
      </GridItem>}

      <GridItem as="footer" colSpan={6}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
