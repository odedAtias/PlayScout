// React imports
import { FC } from 'react'
// Third party libraries imports
import { Image, HStack } from '@chakra-ui/react'
// Fs imports
import { Logo } from '../../../assets/images';
import { ColorModeSwitcher } from './';

export const Navbar: FC = () => {
    return (
        <HStack padding={'1rem'}>
            <Image src={Logo} aria-label='Logo image' boxSize={{ base: '50px', lg: '70px', xl: '90px' }} borderRadius={'50%'} />
            <ColorModeSwitcher />
        </HStack >
    )
}