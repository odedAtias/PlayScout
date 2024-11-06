import { FC } from 'react'
import { Image } from '@chakra-ui/react';

interface Props {
    image_background: string;
    name: string;
};

const GenreImage: FC<Props> = ({ image_background, name }) => {
    return (
        <Image src={image_background} alt={`Image of ${name} genre`} boxSize='30px' fit='cover' borderRadius='5px' />
    )
}

export default GenreImage