// React imports
import { FC } from 'react'
// Third party libraries imports
import { Skeleton } from '@chakra-ui/react';
// FS imports
import { useFetchGameTrailers } from 'features/Games/GameDetails/hooks';

interface Props {
    gameId: string;
    isPortrait: boolean;
};

const GameTrailer: FC<Props> = ({ gameId, isPortrait }: Props) => {

    const { data: trailers, isLoading } = useFetchGameTrailers(gameId);

    if (isLoading) {
        return <Skeleton h={isPortrait ? '48' : '96'} w={isPortrait ? '100%' : '40%'} />
    }

    const [src, poster] = [trailers?.[0]?.data?.[480], trailers?.[0]?.preview];

    if (!src || !poster) {
        return null;
    }

    return (
        <video src={src} poster={poster} controls width={isPortrait ? '100%' : '40%'} />
    )
}

export default GameTrailer