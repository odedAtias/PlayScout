// React imports
import { FC, ReactNode } from 'react'
// Third party libraries imports
import { Box, HStack } from '@chakra-ui/react'

interface Props {
    children: ReactNode,
    isPortrait: boolean,
}

const GameDetailsContainer: FC<Props> = ({ children, isPortrait }: Props) => {

    return (
        <Box pb='5%' pt='1%'>
            {
                isPortrait ? children :
                    <HStack alignItems='flex-start' justifyContent='space-between'>
                        {children}
                    </HStack>
            }
        </Box>
    )
}

export default GameDetailsContainer