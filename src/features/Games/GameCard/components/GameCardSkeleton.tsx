// react imports
import { FC } from 'react'
// third party libraries imports
import { CardBody, HStack, Skeleton, SkeletonCircle, SkeletonText, Spacer } from '@chakra-ui/react'
// FS imports
import { GameCardContainer } from 'features/Games/GameCard/components'

const GameCardSkeleton: FC = () => {
    return (
        <GameCardContainer>
            <Skeleton h='60%' />
            <CardBody h='40%' paddingTop={10}>
                <HStack>
                    <SkeletonText noOfLines={2} w={'75%'} />
                    <Spacer />
                    <SkeletonCircle />
                </HStack>
            </CardBody>
        </GameCardContainer>
    )
}

export default GameCardSkeleton