// React imports
import { FC, useMemo } from 'react'
// FS imports
import GenericImage from '../../../components/GenericImage'
import { getOptimizedCardImage } from '../../../utils/images'

interface Props {
    imageUrl: string,
    imageAlt: string,
}

const CardImage: FC<Props> = ({ imageUrl, imageAlt }) => {
    if (!imageUrl) {
        return null;
    }

    const optimizedImageUrl = useMemo(() => getOptimizedCardImage(imageUrl), [imageUrl]);

    return (
        <GenericImage imageUrl={optimizedImageUrl} imageAlt={imageAlt} imageProps={{ h: '60%' }} />
    );
};

export default CardImage