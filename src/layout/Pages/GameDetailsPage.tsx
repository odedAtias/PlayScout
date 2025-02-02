// React imports
import { FC } from 'react';
// FS imports
import { GameDetails } from 'features/Games/GameDetails/components';
import { Box } from '@chakra-ui/react';

const GameDetailsPage: FC = () => (
    <Box width="100vw" minWidth="100%" px={5}>
        <GameDetails />
    </Box>
);

export default GameDetailsPage;