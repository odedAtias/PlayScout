// React imports
import { FC } from 'react'
// Third party libraries imports
import { MenuItem } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
// FS imports (Default imports)
import GenericMenu from '../../../components/GenericMenu'// FS imports
// FS imports (Named imports)
import { useFetchPlatforms } from '../hooks'
import { Platform } from '../types'
import { AppDispatch } from '../../../store/store'
import { selectPlatform } from '../../../store/gamesParams/gamesParamsSlice'

const PlatformsFilter: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { platforms } = useFetchPlatforms();

    const handleClickPlatform = (id: number) => {
        dispatch(selectPlatform(id));
    };

    const renderItem = ({ id, name }: Platform) => {
        return (
            <MenuItem key={id} onClick={() => handleClickPlatform(id)}>
                {name}
            </MenuItem >
        )
    };

    return (
        <GenericMenu title='Platforms' list={platforms} renderItem={renderItem} />
    )
}

export default PlatformsFilter;