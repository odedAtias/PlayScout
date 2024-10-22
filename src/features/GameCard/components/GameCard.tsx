// React imports
import { FC } from 'react'
// Third party libraries imports
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
// FS imports
import { Game } from '../../GamesList/types/games'
import PlatformsList from './PlatformsList';

interface Props {
    game: Game,
}

const GameCard: FC<Props> = (props: Props) => {
    const { game: { id, background_image, name, parent_platforms } } = props;
    return (
        <Card key={id} borderRadius={10} overflow='hidden' w='350px' h='325px'>
            <Image src={background_image} h='60%' />
            <CardBody h='40%'>
                <Heading fontSize={'2xl'}>{name}</Heading>
                <PlatformsList platforms={parent_platforms} />
            </CardBody>
        </Card>
    )
}

export default GameCard