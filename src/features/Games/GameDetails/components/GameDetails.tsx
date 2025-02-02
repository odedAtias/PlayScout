// React imports
import { FC } from 'react'
// Third party libraries imports
import { useParams } from 'react-router-dom'
// FS imports
import { useFetchGame } from 'features/Games/GameDetails/hooks';

const GameDetailsPage: FC = () => {

    const { id } = useParams();

    const { data: gameDetails } = useFetchGame(id!);

    return (
        <div> GameDetailsPage with id : {gameDetails?.description}</div>
    )
}

export default GameDetailsPage