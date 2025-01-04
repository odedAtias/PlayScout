// React imports
import { FC } from 'react'
// Third party libraries imports
import { MenuItem } from "@chakra-ui/react"
// FS imports (Default imports)
import GenericMenu from '../../../components/GenericMenu'
// FS imports (Named imports)
import { useFetchPlatforms } from '../hooks'
import { Platform } from '../types'
import { SelectedPlatform } from '../../../store/gamesParams/types'
import useCreateContext from '../../../hooks/useCreateContext'
import { GamesParamsContext } from '../../../context/gamesParams/GamesParamsContext'

const PlatformsFilter: FC = () => {
    const { dispatch } = useCreateContext(GamesParamsContext);

    const { platforms } = useFetchPlatforms();

    const handleClickPlatform = (id: number, name: string) => {
        const newSelectedPlatform: SelectedPlatform = { id, name };
        dispatch({ type: 'SELECT_PLATFORM', payload: newSelectedPlatform });
    };

    const renderItem = ({ id, name }: Platform) => {
        return (
            <MenuItem key={id} onClick={() => handleClickPlatform(id, name)}>
                {name}
            </MenuItem >
        )
    };

    return (
        <GenericMenu title='Platforms' list={platforms} renderItem={renderItem} />
    )
}

export default PlatformsFilter;