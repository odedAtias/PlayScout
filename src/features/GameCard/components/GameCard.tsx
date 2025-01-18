// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box, CardBody, Heading, HStack, Spacer } from '@chakra-ui/react';
// FS imports
import { Game } from 'features/Games/types';
import { GameCardContainer, GameCardImage, CriticScore, PlatformsList } from 'features/GameCard/components';

interface Props {
    game: Game,
}

const GameCard: FC<Props> = ({ game }: Props) => {
    
    const { background_image, name, parent_platforms, metacritic } = game;

    return (
        <GameCardContainer>
            <GameCardImage imageUrl={background_image} imageAlt={`${name} image`} />
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