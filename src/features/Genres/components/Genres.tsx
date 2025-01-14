// React imports
import { FC } from 'react';
// Third party libraries imports
import { Container, Text } from '@chakra-ui/react';
// FS imports
import { useFetchGenres } from '../hooks';
import GenresList from './GenresList';


const Genres: FC = () => {

    const { genres, error, isLoading } = useFetchGenres();

    const renderError = () => {
        return error && <Text>{error.message}</Text>;
    };

    return (
        <Container>
            <GenresList genres={genres} isLoading={isLoading} />
            {renderError()}
        </Container>
    )
}

export default Genres;