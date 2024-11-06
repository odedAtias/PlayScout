// React imports
import { FC } from 'react'
// Third party libraries imports
import { Container } from '@chakra-ui/react';
// FS imports
import { useFetchGenres } from '../hooks'
import { Genre } from '../types';
import List from '../../../components/List';
import GenreItem from '../../GenreItem/components/GenreItem';
import GenreItemSkeleton from '../../GenreItem/components/GenreItemSkeleton';


const GenresList: FC = () => {
    const { genres, error, isLoading } = useFetchGenres();

    const renderItem = (genre: Genre) => {
        return <GenreItem key={genre?.id} name={genre?.name} image_background={genre.image_background} />;
    };

    const renderLoading = () => isLoading && Array.from({ length: 15 }, (_, index) => <GenreItemSkeleton key={index} />);

    const renderError = () => {
        return error && <></>;
    };

    return (
        <Container>
            <List data={genres} renderItem={renderItem} renderError={renderError} renderLoading={renderLoading} />
        </Container>
    )
}

export default GenresList