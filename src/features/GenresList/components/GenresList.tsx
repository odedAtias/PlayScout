// React imports
import { FC } from 'react'
// Third party libraries imports
import { Container } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
// FS imports
import { useFetchGenres } from '../hooks'
import { Genre } from '../types';
import List from '../../../components/List';
import GenreItem from '../../GenreItem/components/GenreItem';
import GenreItemSkeleton from '../../GenreItem/components/GenreItemSkeleton';
import { AppDispatch, RootState } from '../../../store/store';
import { deselectGenre, selectGenre } from '../../../store/gamesParams/gamesParamsSlice';


const GenresList: FC = () => {
    const { genres, error, isLoading } = useFetchGenres();
    const { selectedGenre } = useSelector((state: RootState) => state.gamesParams);

    const dispatch = useDispatch<AppDispatch>();

    const handleClickGenre = (genreId: number) => {
        dispatch(selectedGenre === genreId ? deselectGenre() : selectGenre(genreId));
    };

    const renderItem = (genre: Genre) => {
        return <GenreItem key={genre?.id} name={genre?.name} image_background={genre.image_background} onClick={() => handleClickGenre(genre?.id)} isSelected={genre?.id === selectedGenre} />;
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