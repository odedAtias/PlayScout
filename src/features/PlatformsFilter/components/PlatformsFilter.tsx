// React imports
import { FC } from 'react'
// Third party libraries imports
import { Box, MenuItem, Skeleton, Text } from "@chakra-ui/react"
// FS imports
import { GenericMenu } from 'components'
import { useFetchPlatforms } from 'features/PlatformsFilter/hooks'
import { Platform } from 'features/PlatformsFilter/types'
import { useGamesParams } from 'features/Games/GamesList/store'

const PlatformsFilter: FC = () => {

    const { selectPlatform } = useGamesParams();

    const { platforms, isLoading, error } = useFetchPlatforms();

    const handleClickPlatform = (id: number, name: string) => {
        const newSelectedPlatform = { id, name };
        selectPlatform(newSelectedPlatform);
    };

    const renderItem = ({ id, name }: Platform) => {
        return (
            <MenuItem key={id} onClick={() => handleClickPlatform(id, name)}>
                {name}
            </MenuItem >
        )
    };

    if (isLoading) {
        return <Skeleton height='2.5rem' minWidth={'8rem'} borderRadius={'0.375rem'} />;
    }

    else if (error) {
        return <Box>
            <Text>Can't fetch the platforms filters</Text>
        </Box>
    }

    return (
        platforms?.length > 0 && <GenericMenu title='Platforms' list={platforms} renderItem={renderItem} />
    )
}

export default PlatformsFilter;