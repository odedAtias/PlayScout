// React imports
import { FC, useCallback } from 'react';
// Third party libraries imports
import { HStack, SimpleGrid, Spinner } from '@chakra-ui/react';
// FS imports (Named imports)
import { GameCard, GameCardSkeleton } from '../../GameCard/components';
import { ErrorMessage, List } from '../../../components';
import { useFetchGames } from '../hooks';
import { Game } from '../types';
import { PAGE_SIZE } from '../utils';


const GamesList: FC = () => {
    const { games, error, isLoading, needToFetchMore } = useFetchGames();

    const renderItem = (game: Game) => <GameCard key={game?.id} game={game} />;

    const renderError = () => error && (<ErrorMessage message={error} />);

    const renderLoading = () => isLoading && games.length === 0 && !needToFetchMore && Array.from({ length: PAGE_SIZE }, (_, index) => (<GameCardSkeleton key={`initial-loading-${index}`} />));

    const FetchMoreSpinner: FC = useCallback(() => (
        <HStack w={'100%'} justifyContent={'center'} alignItems={'center'} marginTop={10}>
            <Spinner boxSize={50} />
        </HStack>
    ), []);

    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} placeItems={'center'} gap={{ base: 5, md: 10 }}>
                <List data={games} renderItem={renderItem} renderError={renderError} renderLoading={renderLoading} />
            </SimpleGrid>
            {needToFetchMore && <FetchMoreSpinner />}
        </>
    );
}

export default GamesList;