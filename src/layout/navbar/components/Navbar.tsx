// React imports
import { FC } from 'react';
// Third party libraries imports
import { HStack, InputProps, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// FS imports 
import { Logo } from 'assets/images';
import { ColorModeSwitcher, SearchInput } from 'navbar/components';
import { useGamesParams } from 'features/Games/GamesList/store';
import { GenericImage } from 'components';

const Navbar: FC = () => {

    const { updateSearch, deselectGenre, selectOrderOption, selectPlatform } = useGamesParams();

    const navigate = useNavigate();

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

    const handleClick = () => {
        navigate('/');
        // Reset all the flags
        deselectGenre();
        handleUpdateSearch("");
        selectOrderOption(null);
        selectPlatform(null);
    };

    return (
        <HStack padding={'1rem'}>
            <GenericImage imageUrl={Logo} imageAlt='Logo image' imageProps={{ boxSize: { base: '50px', lg: '70px', xl: '90px' }, borderRadius: '15px', onClick: handleClick, cursor: 'pointer' }} />
            <SearchInput updateSearch={handleUpdateSearch} inputProps={inputProps} debounceTime={400} />
            <ColorModeSwitcher />
        </HStack >
    )
};

export default Navbar;