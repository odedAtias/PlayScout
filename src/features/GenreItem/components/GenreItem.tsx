// React imports
import { FC } from 'react';
// Third party libraries imports
import { Button, useColorModeValue } from '@chakra-ui/react';
// FS imports
import { GenreItemContainer, GenreImage } from 'features/GenreItem/components';

interface Props {
    name: string;
    image_background: string;
    onClick: () => void;
    isSelected?: boolean;
}

const GenreItem: FC<Props> = ({ name, image_background, onClick, isSelected = false }) => {

    const textColor = useColorModeValue('black', 'white');
    const selectedBackgroundColor = useColorModeValue('white', 'gray.700');
    const backgroundColor = isSelected ? selectedBackgroundColor : 'transparent';

    return (
        <GenreItemContainer customStyle={{ backgroundColor }}>
            <GenreImage name={name} image_background={image_background} />
            <Button textColor={textColor} variant="link" onClick={onClick} noOfLines={1}>
                {name}
            </Button>
        </GenreItemContainer>
    );
};

export default GenreItem;
