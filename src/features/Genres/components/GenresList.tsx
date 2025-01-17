// React imports
import { FC } from 'react';
// FS imports
import { GenreItem, GenreItemSkeleton } from 'features/GenreItem/components';
import { GamesParamsContext, GamesParamsContextProps, SelectedGenre } from 'context/gamesParams';
import { List } from 'components';
import { Genre } from 'features/Genres/types';
import { useCreateContext } from 'hooks';

interface Props {
    genres: Genre[];
    isLoading: boolean;
};

const GenresList: FC<Props> = (props: Props) => {

    const { genres, isLoading } = props;

    const { state: { selectedGenre }, dispatch } = useCreateContext<GamesParamsContextProps>(GamesParamsContext);

    const renderItem = (genre: Genre) => {
        return <GenreItem key={genre?.id} name={genre?.name} image_background={genre.image_background} onClick={() => handleClickGenre(genre?.id, genre?.name)} isSelected={genre?.id === selectedGenre?.id} />;
    };

    const renderLoading = () => isLoading && Array.from({ length: 15 }, (_, index) => <GenreItemSkeleton key={index} />);

    const handleClickGenre = (id: number, name: string) => {
        const newSelectedGenre: SelectedGenre = { id, name };
        dispatch(selectedGenre?.id === newSelectedGenre?.id ? { type: 'DESELECT_GENRE' } : { type: 'SELECT_GENRE', payload: newSelectedGenre });
    };

    return (
        <>
            <List data={genres} renderItem={renderItem} />
            {renderLoading()}
        </>
    )
}

export default GenresList