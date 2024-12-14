// React imports
import { FC } from 'react'
// Third party libraries imports
import { MenuItem } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
// FS imports (Default imports)
import GenericMenu from '../../../components/GenericMenu'
// FS imports (Named imports)
import { useFetchPlatforms } from '../hooks'
import { Platform } from '../types'
import { AppDispatch } from '../../../store/store'
import { selectPlatform } from '../../../store/gamesParams/gamesParamsSlice'
import { SelectedPlatform } from '../../../store/gamesParams/types'

const PlatformsFilter: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { platforms } = useFetchPlatforms();

    const handleClickPlatform = (id: number, name: string) => {
        const newSelectedPlatform: SelectedPlatform = { id, name };
        dispatch(selectPlatform(newSelectedPlatform));
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