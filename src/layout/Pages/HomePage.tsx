// React imports
import { FC } from 'react'
// Third party libraries imports
import { Box, GridItem, HStack } from '@chakra-ui/react'
// FS imports
import { Genres } from 'features/Genres/GenresList/components'
import { PlatformsFilter } from 'features/PlatformsFilter/components'
import { SortSelector } from 'features/SortSelector/components'
import { GamesHeading } from 'features/Games/GamesHeading/components'
import { Games } from 'features/Games/GamesList/components'

const HomePage: FC = () => {

    return (
        <>
            {/* Aside */}
            <GridItem as="aside" colSpan={1} display={{ base: 'none', lg: 'block' }}>
                <Genres />
            </GridItem>
            {/* Main */}
            <GridItem as="main" colSpan={{ base: 6, lg: 5 }}>
                <Box ml={{ base: "5%", md: "7%", xl: "6%" }}>
                    <HStack marginBottom={"2%"} marginTop={2} gap={15}>
                        <PlatformsFilter />
                        <SortSelector />
                    </HStack>
                    <GamesHeading />
                </Box>
                <Games />
            </GridItem>
        </>
    )
}

export default HomePage