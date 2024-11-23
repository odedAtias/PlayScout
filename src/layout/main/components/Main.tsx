import { FC, useEffect } from 'react';
// Third-party libraries imports
import { HStack } from '@chakra-ui/react';
// FS imports
import GamesList from '../../../features/GamesList/components/GamesList';
import PlatformsFilter from '../../../features/PlatformsFilter/components/PlatformsFilter';
import SortSelector from '../../../features/SortSelector/components/SortSelector';

export const Main: FC = () => {
    return (
        <>
            <HStack marginLeft={20} marginBottom={'3%'} marginTop={2} gap={15}>
                <PlatformsFilter />
                <SortSelector />
            </HStack>
            <GamesList />
        </>
    );
};
