// React imports
import { FC } from 'react'
// Third party libraries imports
import { Card, CardBody, Heading, HStack, Spacer } from '@chakra-ui/react';
// FS imports
import { Game } from '../../GamesList/types/games'
import PlatformsList from './PlatformsList';
import CriticScore from './CriticScore';
import CardImage from './CardImage';

interface Props {
    game: Game,
}

const GameCard: FC<Props> = (props: Props) => {
    const { game: { id, background_image, name, parent_platforms, metacritic } } = props;
    return (
        <Card key={id} borderRadius={10} overflow='hidden' w='350px' h='325px'>
            <CardImage imageUrl={background_image} imageAlt={`${name} image`} />
            <CardBody h='40%'>
                <Heading fontSize={'2xl'}>{name}</Heading>
                <HStack mt={2}>
                    <PlatformsList platforms={parent_platforms} />
                    <Spacer />
                    <CriticScore score={metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard