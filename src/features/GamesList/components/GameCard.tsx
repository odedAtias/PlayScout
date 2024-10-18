// React imports
import { FC } from 'react'
// Thrid party libraries imports
import { Card, Heading, Image, Stack } from '@chakra-ui/react';
// FS imports
import { Game } from '../types/games';

interface Props {
    name: string | keyof Game,
    image: string | keyof Game,
};

export const GameCard: FC<Props> = (props: Props) => {
    const { name, image } = props;

    return (
        <Card>
            <Image
                src={image}
                alt={`${name}'s background Image`}
            />
            <Stack>
                <Heading textAlign={'center'}>{name}</Heading>
            </Stack>
        </Card>
    )
}