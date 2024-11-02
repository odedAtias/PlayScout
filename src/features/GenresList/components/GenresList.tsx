// React imports
import { FC } from 'react'
// FS imports
import { useFetchGenres } from '../hooks'
import { Genre } from '../types';
import List from '../../../components/List';
import GenreItem from '../../GenreItem/components/GenreItem';


const GenresList: FC = () => {
    const { genres, error, isLoading } = useFetchGenres();

    const renderItem = (genre: Genre) => {
        return <GenreItem key={genre?.id} name={genre?.name} image_background={genre.image_background} />;
    };

    const renderLoading = (genre: Genre) => {
        return isLoading && <></>
    };

    const renderError = () => {
        return error && <></>;
    };



    return (
        <List data={genres} renderItem={renderItem} renderError={renderError} renderLoading={renderLoading} />
    )
}

export default GenresList