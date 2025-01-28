// React imports
import { FC } from 'react';
// Third party libraries imports
import { HStack, Image, InputProps, useColorModeValue } from '@chakra-ui/react';
// FS imports 
import { Logo } from 'assets/images';
import { ColorModeSwitcher, SearchInput } from 'navbar/components';
import { useGamesParams } from 'features/Games/GamesList/store';

const Navbar: FC = () => {

    const { updateSearch } = useGamesParams();

    const handleUpdateSearch = (debouncedSearchText: string) => {
        updateSearch(debouncedSearchText);
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

export default Navbar;