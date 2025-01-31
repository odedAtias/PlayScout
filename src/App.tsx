// react imports
import { FC } from 'react'
// third party libraries imports
import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';
// FS imports
import { Navbar, Footer } from 'src/layout';


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

      {/* Here will render all the pages */}
      <Outlet />

      <GridItem as="footer" colSpan={6}>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default App;