// React imports
import { FC } from 'react'
// Third party libraries imports
import { Button } from '@chakra-ui/react';
// FS imports
import GenreImage from './GenreImage';
import GenreItemContainer from './GenreItemContainer';

interface Props {
    name: string;
    image_background: string;
    onClick: () => void;
};

const GenreItem: FC<Props> = ({ name, image_background, onClick }: Props) => {
    return (
        <GenreItemContainer>
            <GenreImage name={name} image_background={image_background} />
            <Button variant='link' onClick={onClick}>{name}</Button>
        </GenreItemContainer>
    )
}

export default GenreItem