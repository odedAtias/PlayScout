// React imports
import { FC } from 'react';
// Third party libraries imports
import { SimpleGrid } from '@chakra-ui/react';
// FS imports
import { useFetchGames } from '../hooks';
import GameCard from '../../GameCard/components/GameCard';
import List from '../../../components/List';
import { Game } from '../types/games';
import GameCardSkeleton from '../../GameCard/components/GameCardSkeleton';
import ErrorMessage from '../../../components/ErrorMessage';
import { PAGE_SIZE } from '../utils/constants';


const GamesList: FC = () => {
    const { games, error, isLoading } = useFetchGames();

    const renderItem = (game: Game) => <GameCard key={game?.id} game={game} />
    const renderError = () => error && (<ErrorMessage message={error} />);
    const renderLoading = () => isLoading && Array.from({ length: PAGE_SIZE }, (_, index) => <GameCardSkeleton key={index} />);

    return (
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} placeItems={'center'} gap={{ base: 5, md: 10 }}>
            <List data={games} renderItem={renderItem} renderError={renderError} renderLoading={renderLoading} />
        </SimpleGrid>
    )
}

export default GamesList;