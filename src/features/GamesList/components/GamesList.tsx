// React imports
import { FC } from 'react';
// FS imports
import useFetchGames from '../hooks/useFetchGames'
import { Container, SimpleGrid, Text } from '@chakra-ui/react';
import { NotAllowedIcon } from '@chakra-ui/icons'
import GameCard from './GameCard';
import List from '../../../components/List';
import { Game } from '../types/games';

const GamesList: FC = () => {
    const { games, error, isLoading } = useFetchGames();

    const renderItem = (game: Game) => (<GameCard key={game.id} game={game} />)

    const renderError = () => {
        return error && (
            <Container display={'flex'} justifyContent={'center'} alignItems={'center'} height={'50vh'}>
                <NotAllowedIcon color={'red'} fontSize={'2xl'} marginRight={'5px'} />
                <Text color={'red'} fontSize={'2xl'} textAlign={'center'}>
                    {error}
                </Text>
            </Container>
        )
    }

    const renderLodaing = () => {
        return isLoading && (<></>);
    }

    return (
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} placeItems={'center'} gap={{ base: 5, md: 10 }}>
            <List data={games} renderItem={renderItem} renderError={renderError} renderLoading={renderLodaing} />
        </SimpleGrid>
    )
}

export default GamesList;