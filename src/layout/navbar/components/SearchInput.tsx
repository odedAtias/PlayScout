// React imports
import { ChangeEvent, FC, useEffect, useState } from 'react'
// Third party libraries imports
import { Input, InputProps } from '@chakra-ui/react'
// FS imports (Named imports)
import { useDebounce } from '../../../hooks';

interface Props {
    inputProps?: InputProps,
    debounceTime?: number,
    updateSearch: (debouncedSearchText: string) => void,
};

const SearchInput: FC<Props> = ({ inputProps = {}, debounceTime, updateSearch }: Props) => {

    const [searchText, setSearchText] = useState<string>('');
    const debouncedSearchText = useDebounce<string>(searchText, debounceTime);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Preventing the default bahviour of the search input
        event.preventDefault();

        const { value } = event.target;

        setSearchText(value);
    };

    useEffect(() => {
        updateSearch && updateSearch(debouncedSearchText);
    }, [debouncedSearchText]);

    return (
        <Input onChange={handleChange} value={searchText} {...inputProps} />
    )
}

export default SearchInput