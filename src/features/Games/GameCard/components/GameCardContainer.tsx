// React imports
import { FC, ReactNode } from 'react'
// Third party libraries imports
import { Card } from '@chakra-ui/react'

interface Props {
    children: ReactNode
}

const GameCardContainer: FC<Props> = ({ children }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden' w='300px' h='325px'>
            {children}
        </Card>
    )
}

export default GameCardContainer