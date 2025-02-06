// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box, BoxProps, ButtonProps, Heading, HStack, TextProps } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
// FS imports
import { ExpandableText, Loader } from 'components';
import { GameAttributes, GameTrailer } from 'features/Games/GameDetails/components';
import { useFetchGame } from 'features/Games/GameDetails/hooks';

const GameDetails: FC = () => {

    const { id: gameId } = useParams();

    const { data: gameDetails, isLoading: isLoadingGameDetails } = useFetchGame(gameId!);

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
        ml: '2',
        mb: '1.5',
    };

    const boxProps: BoxProps = {
        alignItems: 'center',
    };

    return (
        <Box pb='5%' pt='1%'>
            <HStack alignItems={'flex-start'} justifyContent={'space-between'}>
                <Box>
                    <Heading fontSize={{ base: '3xl', lg: '4xl' }} noOfLines={1} mb={2}>
                        {gameDetails?.name ?? 'Game Details'}
                    </Heading>
                    <ExpandableText boxProps={boxProps} textProps={textProps} buttonProps={buttonProps} >
                        {gameDetails?.description_raw ?? 'No description available.'}
                    </ExpandableText>
                    <GameAttributes game={gameDetails!} />
                </Box>
                <GameTrailer gameId={gameId!} />
            </HStack>
        </Box>
    )
}

export default GameDetails