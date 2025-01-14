// React imports
import { FC } from 'react'
// Third party libraries imports
import { Box, HStack } from '@chakra-ui/react';
// FS imports
import GamesList from '../../../features/Games/components/Games'
import PlatformsFilter from '../../../features/PlatformsFilter/components/PlatformsFilter';
import SortSelector from '../../../features/SortSelector/components/SortSelector';
import GamesHeading from '../../../features/GamesHeading/components/GamesHeading';

export const Main: FC = () => {
    
    return (
        <>
            <Box ml={{ base: "5%", md: "7%", xl: "6%"}}>
                <HStack marginBottom={"2%"} marginTop={2} gap={15}>
                    <PlatformsFilter />
                    <SortSelector />
                </HStack>
                <GamesHeading />
            </Box>
            <GamesList />
        </>
    )
};
