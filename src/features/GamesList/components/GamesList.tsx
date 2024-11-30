// React imports
import { FC, useCallback } from 'react';
// Third party libraries imports
import { HStack, SimpleGrid, Spinner } from '@chakra-ui/react';
// FS imports
import GameCard from '../../GameCard/components/GameCard';
import List from '../../../components/List';
import GameCardSkeleton from '../../GameCard/components/GameCardSkeleton';
import ErrorMessage from '../../../components/ErrorMessage';
import { useFetchGames } from '../hooks';
import { Game } from '../types/games';
import { PAGE_SIZE } from '../utils/constants';


const GamesList: FC = () => {
    const { games, error, isLoading, needToFetchMore } = useFetchGames();

    const renderItem = (game: Game) => <GameCard key={game?.id} game={game} />
    const renderError = () => error && (<ErrorMessage message={error} />);
    const renderLoading = () => isLoading && Array.from({ length: PAGE_SIZE }, (_, index) => <GameCardSkeleton key={index} />);

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
            {needToFetchMore && < FetchMoreSpinner />}
        </>
    )
}

export default GamesList;