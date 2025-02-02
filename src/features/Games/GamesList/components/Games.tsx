// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box } from '@chakra-ui/react';
// FS imports
import { useOnScrollBottom } from 'hooks';
import { useFetchGames } from 'src/features/Games/GamesList/hooks';
import { GamesList, GamesListErrorMessage, GamesListLoader } from 'features/Games/GamesList/components';

const Games: FC = () => {

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, error } = useFetchGames();

    useOnScrollBottom(() => {
        hasNextPage && !isFetchingNextPage && fetchNextPage();
    });

    return (
        <Box mb={'10%'}>
            <GamesList pages={data?.pages!} isLoading={isLoading} />
            <GamesListErrorMessage error={error} />
            <GamesListLoader showLoader={hasNextPage && isFetchingNextPage} />
        </Box>
    );
}

export default Games;