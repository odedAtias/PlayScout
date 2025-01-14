// React imports
import { FC } from 'react'
// Third party libraries imports
import { SimpleGrid } from '@chakra-ui/react'
// FS imports
import { PAGE_SIZE } from '../utils';
import { GameCard, GameCardSkeleton } from '../../GameCard/components';
import { List } from '../../../components';
import { FetchResponse } from '../../../types/global';
import { Game } from '../types';

interface Props {
    pages: FetchResponse<Game>[];
    isLoading: boolean;
};

const GamesList: FC<Props> = (props: Props) => {

    const { isLoading, pages } = props;

    const renderLoading = () => Array.from({ length: PAGE_SIZE }, (_, index) => <GameCardSkeleton key={index} />);

    const renderItem = (game: Game) => <GameCard key={game?.id} game={game} />;

    return (
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} placeItems={'center'} gap={{ base: 5, md: 10 }}>
            {isLoading && renderLoading()}
            {pages?.map((page: FetchResponse<Game>, index) => {
                return <List key={index} data={page?.results} renderItem={renderItem} />
            })}
        </SimpleGrid>
    )
}

export default GamesList