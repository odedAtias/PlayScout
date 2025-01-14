// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box } from '@chakra-ui/react';
// FS imports
import { useFetchGames } from '../hooks/useFetchGames';
import useOnScrollBottom from '../hooks/useOnScrollBottom';
import GamesList from './GamesList';
import GamesListErrorMessage from './GamesListErrorMessage';
import GamesListLoader from './GamesListLoader';

const Games: FC = () => {

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, error } = useFetchGames();

    useOnScrollBottom(() => {
        hasNextPage && !isFetchingNextPage && fetchNextPage();
    });

    return (
        <Box mb={'10%'}>
            <GamesList pages={data?.pages || []} isLoading={isLoading} />
            <GamesListErrorMessage error={error} />
            <GamesListLoader showLoader={hasNextPage && isFetchingNextPage} />
        </Box>
    );
}

export default Games;