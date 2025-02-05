// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box, BoxProps, ButtonProps, Heading, TextProps } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
// FS imports
import { ExpandableText } from 'components';
import { useFetchGame, useFetchGameTrailers } from 'features/Games/GameDetails/hooks';
import { Loader } from 'src/components/Loader';
import GameAttributes from './GameAttributes';

const GameDetails: FC = () => {

    const { id } = useParams();

    const { data: gameDetails, isLoading: isLoadingGameDetails } = useFetchGame(id!);
    const { data: trailers, isLoading: isLoadingTrailer } = useFetchGameTrailers(id!);

    console.info('========trailers',trailers);

    if (isLoadingGameDetails) {
        return <Loader spinnerProps={{ boxSize: 100 }} />;
    }

    const textProps: TextProps = {
        fontSize: { base: '1rem', md: '1.2rem' },
        fontWeight: 'medium',
        lineHeight: 'tall',
        display: 'inline',
    };

    const buttonProps: ButtonProps = {
        size: 'xs',
        fontWeight: 'semibold',
        colorScheme: 'green',
        borderRadius: 'md',
        ml: 2,
    };

    const boxProps: BoxProps = {
        alignItems: 'center',
    };

    return (
        <Box pb={{ base: '24', lg: '16' }} pt='4'>
            <Heading fontSize={{ base: '3xl', lg: '4xl' }} noOfLines={1} mb={2}>{gameDetails?.name ?? 'Game Details'}</Heading>
            <ExpandableText boxProps={boxProps} textProps={textProps} buttonProps={buttonProps}>
                {gameDetails?.description_raw ?? 'No description available.'}
            </ExpandableText>
            <GameAttributes game={gameDetails!} />
        </Box>
    )
}

export default GameDetails