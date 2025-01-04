// React imports
import { FC } from 'react';
// Third party libraries imports
import { Container } from '@chakra-ui/react';
// FS imports (Default imports)
import List from '../../../components/List';
import GenreItem from '../../GenreItem/components/GenreItem';
import GenreItemSkeleton from '../../GenreItem/components/GenreItemSkeleton';
import useCreateContext from '../../../hooks/useCreateContext';
// FS imports (Named imports)
import { GamesParamsContext, GamesParamsContextProps } from '../../../context/gamesParams/GamesParamsContext';
import { SelectedGenre } from '../../../context/gamesParams/types';
import { useFetchGenres } from '../hooks';
import { Genre } from '../types';


const GenresList: FC = () => {
    const { genres, error, isLoading } = useFetchGenres();

    const { state: { selectedGenre }, dispatch } = useCreateContext<GamesParamsContextProps>(GamesParamsContext);

    const handleClickGenre = (id: number, name: string) => {
        const newSelectedGenre: SelectedGenre = { id, name };
        dispatch(selectedGenre?.id === newSelectedGenre?.id ? { type: 'DESELECT_GENRE' } : { type: 'SELECT_GENRE', payload: newSelectedGenre });
    };

    const renderItem = (genre: Genre) => {
        return <GenreItem key={genre?.id} name={genre?.name} image_background={genre.image_background} onClick={() => handleClickGenre(genre?.id, genre?.name)} isSelected={genre?.id === selectedGenre?.id} />;
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

export default GenresList;