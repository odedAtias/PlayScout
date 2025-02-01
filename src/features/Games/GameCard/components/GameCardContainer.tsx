// React imports
import { FC, ReactNode } from 'react'
// Third party libraries imports
import { Card, CardProps } from '@chakra-ui/react'

interface Props {
    children: ReactNode,
    cardProps?: CardProps,
}

const GameCardContainer: FC<Props> = ({ children, cardProps = {} }: Props) => {

    return (
        <Card
            {...cardProps}
            borderRadius={10}
            overflow='hidden'
            w='300px'
            h='325px'
        >
            {children}
        </Card>
    )
}

export default GameCardContainer