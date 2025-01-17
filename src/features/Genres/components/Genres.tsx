// React imports
import { FC } from 'react';
// Third party libraries imports
import { Container, Text } from '@chakra-ui/react';
// FS imports
import { GenresList } from 'features/Genres/components';
import { useFetchGenres } from 'features/Genres/hooks';

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