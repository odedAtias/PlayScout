// React imports
import { HStack, Text } from '@chakra-ui/react';
import { FC } from 'react'
import GenreImage from './GenreImage';

interface Props {
    name: string;
    image_background: string;
};

const GenreItem: FC<Props> = ({ name, image_background }: Props) => {
    return (
        <HStack mb={3}>
            <GenreImage name={name} image_background={image_background} />
            <Text noOfLines={1}>{name}</Text>
        </HStack>
    )
}

export default GenreItem