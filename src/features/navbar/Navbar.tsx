import { Image, Text, HStack } from '@chakra-ui/react';
import Logo from '../../assets/images/Logo.png'

const Navbar = () => {
    return (
        <HStack padding={'1rem'}>
            <Image src={Logo} boxSize={{ base: '50px', lg: '70px', xl: '90px' }} borderRadius={'50%'} />
            <Text>Navbar</Text>
        </HStack>
    )
}

export default Navbar