// React imports
import { FC } from 'react'
// Third party libraries imports
import { Heading } from '@chakra-ui/react'
// FS imports
import useGamesParams from '../../GamesList/store/useGamesParams'

const GamesHeading: FC = () => {

    const { selectedPlatform, selectedGenre } = useGamesParams();

    const title: string = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

    return (
        <Heading as="h1" size="lg" marginBottom={"2%"}>{title}</Heading>
    )
}

export default GamesHeading