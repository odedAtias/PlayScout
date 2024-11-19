// React imports
import { FC } from 'react'
// Third party libraries imports
import { MenuItem, Box } from "@chakra-ui/react"
// FS imports
import { useFetchPlatforms } from '../hooks'
import { Platform } from '../types'
import GenericMenu from '../../../components/GenericMenu'

const PlatformsFilter: FC = () => {
    const { platforms } = useFetchPlatforms();

    const handleClickPlatform = (id: number) => {
        alert(`Clicked : ${id}`)
    };

    const renderItem = ({ id, name }: Platform) => {
        return (
            <MenuItem key={id} onClick={() => handleClickPlatform(id)}>
                {name}
            </MenuItem >
        )
    };

    return (
        <Box marginLeft={20} marginBottom={"3%"} marginTop={2}>
            <GenericMenu title='Platforms' list={platforms} renderItem={renderItem} />
        </Box>
    )
}

export default PlatformsFilter