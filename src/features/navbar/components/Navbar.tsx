// react imports
import { FC } from 'react'
// third party libraries imports
import { Image, Text, HStack, useColorMode, Spacer } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
// file system imports
import { Logo } from '../../../assets/images';
import IconButton from '../../../components/IconButton';

export const Navbar: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack padding={'1rem'}>
            <Image src={Logo} boxSize={{ base: '50px', lg: '70px', xl: '90px' }} borderRadius={'50%'} />
            <Spacer/>
            <IconButton Icon={colorMode === 'light' ? MoonIcon : SunIcon} onClick={toggleColorMode} />
        </HStack >
    )
}