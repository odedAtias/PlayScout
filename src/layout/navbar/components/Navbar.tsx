// React imports
import { FC } from 'react'
// Third party libraries imports
import { Image, HStack, InputProps, useColorModeValue } from '@chakra-ui/react'
// FS imports (Default imports)
import SearchInput from './SearchInput';
// FS imports (Named imports)
import { Logo } from '../../../assets/images';
import { ColorModeSwitcher } from './';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { updateSearch } from '../../../store/gamesParams/gamesParamsSlice';

export const Navbar: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleUpdateSearch = (debouncedSearchText: string) => {
        dispatch(updateSearch(debouncedSearchText))
    };

    const borderColor = useColorModeValue('gray.400', 'gray.600')

    const inputProps: InputProps = Object.freeze({
        placeholder: 'Find your favorite games...',
        borderRadius : 15,
        margin: 2,
        borderColor,
        
    });

    return (
        <HStack padding={'1rem'}>
            <Image src={Logo} aria-label='Logo image' boxSize={{ base: '50px', lg: '70px', xl: '90px' }} borderRadius={'15px'} />
            <SearchInput updateSearch={handleUpdateSearch} inputProps={inputProps} />
            <ColorModeSwitcher />
        </HStack >
    )
}