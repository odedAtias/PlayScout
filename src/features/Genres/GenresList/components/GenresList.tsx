// React imports
import { FC } from 'react';
// FS imports
import { List } from 'components';
import { GenreItem, GenreItemSkeleton } from 'features/Genres/GenreItem/components';
import { Genre } from 'features/Genres/GenresList/types';
import useGamesParams from 'features/Games/GamesList/store/useGamesParams';

interface Props {
    genres: Genre[];
    isLoading: boolean;
};

const GenresList: FC<Props> = (props: Props) => {

    const { genres, isLoading } = props;

    const { selectedGenre, deselectGenre, selectGenre } = useGamesParams();

    const renderItem = (genre: Genre) => {
        return <GenreItem key={genre?.id} name={genre?.name} image_background={genre.image_background} onClick={() => handleClickGenre(genre?.id, genre?.name)} isSelected={genre?.id === selectedGenre?.id} />;
    };

    const renderLoading = () => isLoading && Array.from({ length: 15 }, (_, index) => <GenreItemSkeleton key={index} />);

    const handleClickGenre = (id: number, name: string) => {
        const newSelectedGenre = { id, name };
        selectedGenre?.id === newSelectedGenre?.id ? deselectGenre() : selectGenre(newSelectedGenre);
    };

    return (
        <>
            <List data={genres} renderItem={renderItem} />
            {renderLoading()}
        </>
    )
}

export default GenresList