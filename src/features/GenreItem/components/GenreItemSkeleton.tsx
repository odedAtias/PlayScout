// React imports
import { FC } from 'react'
// Third party library imports
import { Skeleton, SkeletonCircle } from '@chakra-ui/react'
// FS imports
import { GenreItemContainer } from 'features/GenreItem/components'

const GenreItemSkeleton: FC = () => {
    return (
        <GenreItemContainer>
            <SkeletonCircle borderRadius='5px' />
            <Skeleton height='4' w='60%' />
        </GenreItemContainer>
    )
}

export default GenreItemSkeleton