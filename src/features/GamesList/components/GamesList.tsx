// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box, SimpleGrid } from '@chakra-ui/react';
// FS imports (Named imports)
import { GameCard, GameCardSkeleton } from '../../GameCard/components';
import { ErrorMessage, List } from '../../../components';
import { Game } from '../types';
import { useFetchGames1 } from '../hooks/useFetchGames';
import { FetchResponse } from "../../../types/global";
import useOnScrollBottom from '../hooks/useOnScrollBottom';
import { Loader } from '../../../components/Loader';
import { PAGE_SIZE } from '../utils';

const GamesList: FC = () => {

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, error } = useFetchGames1();

    const renderItem = (game: Game) => <GameCard key={game?.id} game={game} />;

    const renderLoading = () => Array.from({ length: PAGE_SIZE }, (_, index) => <GameCardSkeleton key={index} />)

    useOnScrollBottom(() => {
        hasNextPage && !isFetchingNextPage && fetchNextPage();
    });

    return (
        <Box mb={'10%'}>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} placeItems={'center'} gap={{ base: 5, md: 10 }}>
                {isLoading && renderLoading()}
                {data?.pages?.map((page: FetchResponse<Game>, index) => {
                    return <List key={index} data={page?.results} renderItem={renderItem} />
                })}
            </SimpleGrid>
            {/* Check for Error status */}
            {error && <ErrorMessage message={error?.message} textCustomStyle={{ fontSize: '1.8rem', color: 'white' }} />}
            {/* Check for Fetch more data */}
            {hasNextPage && isFetchingNextPage && <Loader />}
        </Box>
    );
}

export default GamesList;