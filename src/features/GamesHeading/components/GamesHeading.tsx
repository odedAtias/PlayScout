// React imports
import { FC } from 'react'
// Third party libraries imports
import { Heading } from '@chakra-ui/react'
// FS imports (Named imports)
import useCreateContext from '../../../hooks/useCreateContext'
import { GamesParamsContext } from '../../../context/gamesParams/GamesParamsContext'

const GamesHeading: FC = () => {

    const {state: {selectedPlatform, selectedGenre}} = useCreateContext(GamesParamsContext);

    const title: string = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

    return (
        <Heading as="h1" size="lg" marginBottom={"2%"}>{title}</Heading>
    )
}

export default GamesHeading