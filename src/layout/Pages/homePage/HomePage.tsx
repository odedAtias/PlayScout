// React imports
import { FC } from 'react'
// Third party libraries imports
import { GridItem } from '@chakra-ui/react'
// FS imports
import { Aside, Main } from 'src/layout'

const HomePage: FC = () => {
    return (
        <>
            <GridItem as="aside" colSpan={1} display={{ base: 'none', lg: 'block' }}>
                <Aside />
            </GridItem>

            <GridItem as="main" colSpan={{ base: 6, lg: 5 }}>
                <Main />
            </GridItem>
        </>
    )
}

export default HomePage