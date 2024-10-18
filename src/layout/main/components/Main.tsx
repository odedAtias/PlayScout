import { FC } from 'react'
import GamesList from '../../../features/GamesList/components/GamesList'

export const Main: FC = () => {
    return (
        <div style={{ padding: 30, backgroundColor: 'red' }}>
            <h1>Our games</h1>
            <GamesList />
        </div>
    )
}