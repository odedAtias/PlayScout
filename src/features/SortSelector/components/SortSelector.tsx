// React imports
import { FC, useMemo } from 'react'
// Third party libraries imports
import { MenuItem } from '@chakra-ui/react'
// FS imports
import { GenericMenu } from 'components'
import { useCreateContext } from 'hooks'
import { ORDERING_OPTIONS } from 'features/SortSelector/utils'
import { OrderOption, orderType } from 'features/SortSelector/types'
import { capitalizeFirstLetter } from 'utils'
import { GamesParamsContext, GamesParamsContextProps } from 'features/Games/context/gamesParams'

const GamesSortBySelector: FC = () => {

    const { state: { selectedOrderOption }, dispatch } = useCreateContext<GamesParamsContextProps>(GamesParamsContext);

    const handleClickOrderOption = (name: orderType) => dispatch({ type: 'SELECT_ORDER_OPTION', payload: name });

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