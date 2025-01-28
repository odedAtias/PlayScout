// React imports
import { FC, useMemo } from 'react'
// Third party libraries imports
import { MenuItem } from '@chakra-ui/react'
// FS imports
import { GenericMenu } from 'components'
import { OrderOption, orderType } from 'features/SortSelector/types'
import { ORDERING_OPTIONS, capitalizeFirstLetter } from 'features/SortSelector/utils'
import { useGamesParams } from 'features/Games/GamesList/store'

const GamesSortBySelector: FC = () => {

    const { selectedOrderOption, selectOrderOption } = useGamesParams();

    const handleClickOrderOption = (name: orderType) => selectOrderOption(name);

    const renderItem = ({ id, name, label }: OrderOption) => {
        return (
            <MenuItem key={id} onClick={() => handleClickOrderOption(name)}>
                {label}
            </MenuItem>
        )
    };

    const title = useMemo(() => !selectedOrderOption ? "None" : capitalizeFirstLetter(selectedOrderOption as string), [selectedOrderOption])

    return (
        <GenericMenu title={`Order By: ${title}`} list={ORDERING_OPTIONS} renderItem={renderItem} />
    );
}

export default GamesSortBySelector