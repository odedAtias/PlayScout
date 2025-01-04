// React imports
import { FC, useMemo } from 'react'
// Third party libraries imports
import { MenuItem } from '@chakra-ui/react'
// FS imports (Default imports)
import GenericMenu from '../../../components/GenericMenu'
// FS imports (Named imports)
import { ORDERING_OPTIONS } from '../utils/constants'
import { OrderOption, orderType } from '../types/types'
import { capitalizeFirstLetter } from '../../../utils/strings'
import useCreateContext from '../../../hooks/useCreateContext'
import { GamesParamsContext } from '../../../context/gamesParams/GamesParamsContext'

const GamesSortBySelector: FC = () => {

    const { state: { selectedOrderOption }, dispatch } = useCreateContext(GamesParamsContext);

    const handleClickOrderOption = (name: orderType) => dispatch({type: 'SELECT_ORDER_OPTION' , payload : name});

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