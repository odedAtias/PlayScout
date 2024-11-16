// React imports
import { FC } from 'react'
// Third party libraries imports
import { Button, StackProps, useColorModeValue } from '@chakra-ui/react';
// FS imports
import GenreImage from './GenreImage';
import GenreItemContainer from './GenreItemContainer';

interface Props {
    name: string;
    image_background: string;
    onClick: () => void;
    isSelected: boolean;
};

const GenreItem: FC<Props> = ({ name, image_background, onClick, isSelected = false }: Props) => {
    const textColor = useColorModeValue('black', 'white');

    const selectedGenreStyle: StackProps = Object.freeze({
        backgroundColor: useColorModeValue('white', 'gray.700'),
        borderRadius: '5px',
    });

    return (
        <GenreItemContainer customStyle={isSelected ? selectedGenreStyle : {}}>
            <GenreImage name={name} image_background={image_background} />
            <Button textColor={textColor} variant='link' onClick={onClick}>{name}</Button>
        </GenreItemContainer>
    )
}

export default GenreItem