import { HStack } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode,
}

const GenreItemContainer: FC<Props> = ({ children }: Props) => {
    return (
        <HStack mb={3}>{children}</HStack>
    )
}

export default GenreItemContainer