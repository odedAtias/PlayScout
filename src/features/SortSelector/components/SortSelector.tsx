// React imports
import { FC } from 'react'
// Third party libraries imports
import { MenuItem } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
// FS imports
import GenericMenu from '../../../components/GenericMenu'
import { ORDERING_OPTIONS } from '../utils/constants'
import { OrderOption, orderType } from '../types/types'
import { AppDispatch } from '../../../store/store'
import { selectOrderOption } from '../../../store/gamesParams/gamesParamsSlice'
import { RootState } from '../../../store/store'
import { capitalizeFirstLetter } from '../../../utils/strings'

const GamesSortBySelector: FC = () => {

    const { selctedOrderOption } = useSelector((state: RootState) => state.gamesParams);

    const dispatch = useDispatch<AppDispatch>();

    const handleClickOrderOption = (name: orderType) => dispatch(selectOrderOption(name));

    const renderItem = ({ id, name, label }: OrderOption) => {
        return (
            <MenuItem key={id} onClick={() => handleClickOrderOption(name)}>
                {label}
            </MenuItem>
        )
    };

    return (
        <GenericMenu title={`Order By: ${capitalizeFirstLetter(selctedOrderOption)}`} list={ORDERING_OPTIONS} renderItem={renderItem} />
    );
}

export default GamesSortBySelector