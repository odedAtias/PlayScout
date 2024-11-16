import { FC } from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import GenreImage from './GenreImage';
import GenreItemContainer from './GenreItemContainer';

interface Props {
    name: string;
    image_background: string;
    onClick: () => void;
    isSelected?: boolean;
}

const GenreItem: FC<Props> = ({ name, image_background, onClick, isSelected = false }) => {
    const textColor = useColorModeValue('black', 'white');
    const backgroundColor = isSelected ? useColorModeValue('white', 'gray.700') : 'transparent';

    return (
        <GenreItemContainer customStyle={{ backgroundColor }}>
            <GenreImage name={name} image_background={image_background} />
            <Button textColor={textColor} variant="link" onClick={onClick}>
                {name}
            </Button>
        </GenreItemContainer>
    );
};

export default GenreItem;
