// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box, CardBody, Heading, HStack, Spacer } from '@chakra-ui/react';
// FS imports
import { Game } from '../../Games/types';
import CardImage from './CardImage';
import CriticScore from './CriticScore';
import GameCardContainer from './GameCardContainer';
import PlatformsList from './PlatformsList';

interface Props {
    game: Game,
}

const GameCard: FC<Props> = (props: Props) => {
    const { game: { background_image, name, parent_platforms, metacritic } } = props;
    return (
        <GameCardContainer>
            <CardImage imageUrl={background_image} imageAlt={`${name} image`} />
            <CardBody h='40%'>
                <HStack mt={2} alignItems='flex-start'>
                    <Heading fontSize={'2xl'} noOfLines={2}>{name}</Heading>
                    <Spacer />
                    <Box>
                        <CriticScore score={metacritic} />
                    </Box>
                </HStack>
                <HStack mt={2} mr={-5}>
                    <PlatformsList platforms={parent_platforms} />
                </HStack>
            </CardBody>
        </GameCardContainer>
    )
}

export default GameCard