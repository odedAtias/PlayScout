// React imports
import { FC, useMemo } from 'react'
// FS imports
import { GenericImage } from 'components'
import { getOptimizedCardImage } from 'features/Games/GameCard/utils'

interface Props {
    imageUrl: string,
    imageAlt: string,
}

const GameCardImage: FC<Props> = ({ imageUrl, imageAlt }: Props) => {
    const optimizedImageUrl = useMemo(() => getOptimizedCardImage(imageUrl), [imageUrl]);

    return (
        <GenericImage imageUrl={optimizedImageUrl} imageAlt={imageAlt} imageProps={{ h: '60%' }} />
    );
};

export default GameCardImage