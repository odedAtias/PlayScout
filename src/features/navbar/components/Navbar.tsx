// react imports
import { FC } from 'react'
// third party libraries imports
import { Image, Text, HStack } from '@chakra-ui/react'
// file system imports
import { Logo } from '../../../assets/images';

export const Navbar: FC = () => {
    return (
        <HStack padding={'1rem'}>
            <Image src={Logo} boxSize={{ base: '50px', lg: '70px', xl: '90px' }} borderRadius={'50%'} />
            <Text>Navbar</Text>
        </HStack>
    )
}