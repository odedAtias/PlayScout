// React imports
import { FC } from 'react';
// Third party libraries imports
import { useBreakpointValue } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
// FS imports
import { GameDetailsContainer, GameOverview, GameTrailer } from 'features/Games/GameDetails/components';

const GameDetails: FC = () => {

    const { id: gameId } = useParams();

    const isPortrait = useBreakpointValue({ base: true, md: false, lg: false, xl: false }) as boolean;

    return (
        <GameDetailsContainer isPortrait={isPortrait}>
            <GameOverview gameId={gameId!} />
            <GameTrailer gameId={gameId!} isPortrait={isPortrait} />
        </GameDetailsContainer>
    )
}

export default GameDetails