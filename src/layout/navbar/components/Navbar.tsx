// React imports
import { FC } from 'react'
// Third party libraries imports
import { Image, HStack, InputProps, useColorModeValue } from '@chakra-ui/react'
// FS imports 
import SearchInput from './SearchInput';
import { useCreateContext } from '../../../hooks';
import { Logo } from '../../../assets/images';
import { ColorModeSwitcher } from './';
import { GamesParamsContext, GamesParamsContextProps } from '../../../context/gamesParams/GamesParamsContext';

export const Navbar: FC = () => {
    const { dispatch } = useCreateContext<GamesParamsContextProps>(GamesParamsContext);

    const handleUpdateSearch = (debouncedSearchText: string) => {
        dispatch({ type: 'UPDATE_SEARCH', payload: debouncedSearchText });
    };

    const borderColor = useColorModeValue('gray.400', 'gray.600');

    const inputProps: InputProps = Object.freeze({
        placeholder: 'Find your favorite games...',
        borderRadius: 15,
        margin: 2,
        borderColor,
    });

    return (
        <HStack padding={'1rem'}>
            <Image src={Logo} aria-label='Logo image' boxSize={{ base: '50px', lg: '70px', xl: '90px' }} borderRadius={'15px'} />
            <SearchInput updateSearch={handleUpdateSearch} inputProps={inputProps} debounceTime={400} />
            <ColorModeSwitcher />
        </HStack >
    )
};