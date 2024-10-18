// React imports
import { FC } from 'react';
// Third party libraries imports
import { Grid } from '@chakra-ui/react';
// FS imports
import useFetchGames from '../hooks/useFetchGames'
import { Game } from '../types/games';
import { GameCard } from './GameCard';


export const GamesList: FC = () => {

    const { games } = useFetchGames();

    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={'1rem'} padding={'1rem'}>
            {games.length > 0 && games.map((game: Game) => <GameCard name={game.name} image={game.background_image} />)}
        </Grid>
    );
}
