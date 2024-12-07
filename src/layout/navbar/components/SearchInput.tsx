// React imports
import { ChangeEvent, FC, useEffect, useState } from 'react'
// Third party libraries imports
import { Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
// FS imports
import { useDebounce } from '../../../hooks';
import { updateSearch } from '../../../store/gamesParams/gamesParamsSlice';
import { AppDispatch } from '../../../store/store';

const SearchInput: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    const [searchText, setSearchText] = useState<string>('');
    const debouncedSearchText = useDebounce(searchText, 300);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Preventing the default bahviour of the search input
        event.preventDefault();

        const { value } = event.target;

        setSearchText(value);
    };

    useEffect(() => {
        dispatch(updateSearch(debouncedSearchText));
    }, [debouncedSearchText]);


    return (
        <Input onChange={handleChange} value={searchText} />
    )
}

export default SearchInput