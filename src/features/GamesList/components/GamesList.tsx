// React imports
import { FC } from 'react';
// FS imports
import useFetchGames from '../hooks/useFetchGames'

const GamesList: FC = () => {
    const { games } = useFetchGames();
    return (
        <div>
            {games.map(game => (
                <div key={game.id}>
                    <p>{game.name}</p>
                </div>
            ))}
        </div>
    )
}

export default GamesList