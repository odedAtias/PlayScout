// React imports
import { HStack } from '@chakra-ui/react';
import { FC } from 'react'
import GenreImage from './GenreImage';

interface Props {
    name: string;
    image_background: string;
};

const GenreItem: FC<Props> = ({ name, image_background }: Props) => {
    return (
        <HStack>
            <GenreImage name={name} image_background={image_background} />
            <span>{name}</span>
        </HStack>
    )
}

export default GenreItem