// React imports
import { FC } from 'react'
// Third party libraries imports
import { HStack } from '@chakra-ui/react';
// FS imports (Default imports)
import GamesList from '../../../features/GamesList/components/GamesList'
import PlatformsFilter from '../../../features/PlatformsFilter/components/PlatformsFilter';
import SortSelector from '../../../features/SortSelector/components/SortSelector';
import GamesHeading from '../../../features/GamesHeading/components/GamesHeading';

export const Main: FC = () => (
    <>
        <HStack marginLeft={20} marginBottom={"2%"} marginTop={2} gap={15}>
            <PlatformsFilter />
            <SortSelector />
        </HStack>
        <GamesHeading />
        <GamesList />
    </>
);