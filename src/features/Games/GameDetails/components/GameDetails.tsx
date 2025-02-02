// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box, ButtonProps, Heading, TextProps } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
// FS imports
import { ExpandableText } from 'components';
import { useFetchGame } from 'features/Games/GameDetails/hooks';
import { Loader } from 'src/components/Loader';

const GameDetails: FC = () => {

    const { id } = useParams();

    const { data: gameDetails, isLoading } = useFetchGame(id!);

    if (isLoading) {
        return <Loader spinnerProps={{ boxSize: 100 }} />;
    }

    const textProps: TextProps = {
        fontSize: { base: '1rem', md: '1.4rem' },
        fontWeight: 'medium',
        lineHeight: 'tall',
    };

    const buttonProps: ButtonProps = {
        size: 'xs',
        fontWeight: 'semibold',
        colorScheme: 'blue',
        borderRadius: 'md',
        ml: 2,
    };

    return (
        <Box pb={{ base: '24', lg: '4' }} pt='4'>
            <Heading fontSize={{ base: '3xl', lg: '4xl' }} noOfLines={1} mb={2}>{gameDetails?.name ?? 'Game Details'}</Heading>
            <ExpandableText textProps={textProps} buttonProps={buttonProps}>
                {gameDetails?.description_raw ?? 'No description available.'}
            </ExpandableText>
        </Box>
    )
}

export default GameDetails