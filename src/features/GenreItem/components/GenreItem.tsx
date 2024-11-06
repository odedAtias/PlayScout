// React imports
import { FC } from 'react'
// Third party libraries imports
import { Text } from '@chakra-ui/react';
// FS imports
import GenreImage from './GenreImage';
import GenreItemContainer from './GenreItemContainer';

interface Props {
    name: string;
    image_background: string;
};

const GenreItem: FC<Props> = ({ name, image_background }: Props) => {
    return (
        <GenreItemContainer>
            <GenreImage name={name} image_background={image_background} />
            <Text noOfLines={1}>{name}</Text>
        </GenreItemContainer>
    )
}

export default GenreItem