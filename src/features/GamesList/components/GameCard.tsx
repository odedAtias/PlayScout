// React imports
import { FC } from 'react'
// Third party libraries imports
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
// FS imports
import { Game } from '../types/games'

interface Props {
    game: Game,
}

const GameCard: FC<Props> = (props: Props) => {
    const { game: { id, background_image, name } } = props;
    return (
        <Card key={id} borderRadius={10} overflow='hidden' w='350px' h='300px'>
            <Image src={background_image} h='65%' />
            <CardBody h='35%'>
                <Heading fontSize={'2xl'}>{name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard