import { FC } from 'react'
import { Game } from '../types/games'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface Props {
    game: Game,
}

const GameCard: FC<Props> = (props: Props) => {
    const { game } = props;
    return (
        <Card key={game.id} borderRadius={10} overflow='hidden' w='350px' h='300px'>
            <Image src={game.background_image} h='65%' />
            <CardBody h='35%'>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard