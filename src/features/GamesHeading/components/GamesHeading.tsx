// React imports
import { FC } from 'react'
// Third party libraries imports
import { Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
// FS imports (Named imports)
import { RootState } from '../../../store/store'

const GamesHeading: FC = () => {
    const { selectedPlatform, selectedGenre } = useSelector((state: RootState) => state.gamesParams);

    const title = `${selectedPlatform ? selectedPlatform?.name : ''} ${selectedGenre ? selectedGenre?.name : ''} Games`;

    return (
        <Heading as="h1" size="lg" marginLeft={20} marginBottom={"2%"}>{title}</Heading>
    )
}

export default GamesHeading