// React imports
import { FC } from 'react';
// Third party libraries imports
import { CardBody, Heading, HStack, Spacer } from '@chakra-ui/react';
// FS imports
import { Game } from '../../GamesList/types';
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
                <HStack mt={2}>
                    <Heading fontSize={'2xl'} noOfLines={1}>{name}</Heading>
                    <Spacer />
                    <CriticScore score={metacritic} />
                </HStack>
                <HStack mt={2}>
                    <PlatformsList platforms={parent_platforms} />
                </HStack>
            </CardBody>
        </GameCardContainer>
    )
}

export default GameCard