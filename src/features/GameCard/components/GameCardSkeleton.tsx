import { Card, CardBody, HStack, Skeleton, SkeletonCircle, SkeletonText, Spacer } from '@chakra-ui/react'
import { FC } from 'react'

const GameCardSkeleton: FC = () => {
    return (
        <Card borderRadius={10} overflow='hidden' w='300px' h='325px' >
            <Skeleton h='60%' />
            <CardBody h='40%' paddingTop={10}>
                <HStack>
                    <SkeletonText noOfLines={2} w={'75%'} />
                    <Spacer />
                    <SkeletonCircle />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton