// React imports
import { FC } from 'react'
// Third party libraries imports
import { Skeleton } from '@chakra-ui/react';
// FS imports
import { useFetchGameTrailers } from 'features/Games/GameDetails/hooks';

interface Props {
    gameId: string;
};

const GameTrailer: FC<Props> = ({ gameId }: Props) => {

    const { data: trailers, isLoading, error } = useFetchGameTrailers(gameId);

    if (isLoading) {
        return <Skeleton h={"96"} w='40%' />
    }

    const [src, poster] = [trailers?.[0]?.data?.[480], trailers?.[0]?.preview];

    if (!src || !poster) {
        return null;
    }

    return (
        <video src={src} poster={poster} controls width={"40%"} />
    )
}

export default GameTrailer