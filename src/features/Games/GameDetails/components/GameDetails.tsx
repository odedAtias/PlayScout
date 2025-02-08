// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
// FS imports
import { GameDetailsContainer, GameOverview, GameScreenshots, GameTrailer } from 'features/Games/GameDetails/components';

const GameDetails: FC = () => {

    const { id: gameId } = useParams() as { id: string };

    const isPortrait = useBreakpointValue({ base: true, md: false, lg: false, xl: false }) as boolean;

    return (
        <Box pb={isPortrait ? '20%' : '5%'} pt='1%'>
            <GameDetailsContainer isPortrait={isPortrait}>
                <GameOverview gameId={gameId} />
                <GameTrailer gameId={gameId} isPortrait={isPortrait} />
            </GameDetailsContainer>
            <GameScreenshots gameId={gameId} isPortrait={isPortrait} />
        </Box>
    )
}

export default GameDetails