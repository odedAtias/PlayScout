// React imports
import { FC } from 'react'
// FS imports
import GamesList from '../../../features/GamesList/components/GamesList'
import PlatformsFilter from '../../../features/PlatformsFilter/components/PlatformsFilter';

export const Main: FC = () => (
    <>
        <PlatformsFilter/>
        <GamesList />
    </>
);