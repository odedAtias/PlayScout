// React imports
import { FC } from 'react'
// Third party libraries imports
import { Heading } from '@chakra-ui/react'
// FS imports
import GamesList from '../../../features/GamesList/components/GamesList'

export const Main: FC = () => {
    return (
        <>
            <GamesList />
        </>
    )
}