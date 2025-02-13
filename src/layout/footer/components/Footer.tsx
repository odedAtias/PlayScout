// React imports
import { FC } from 'react';
// Third party libraries imports
import { HStack, Text, useColorModeValue } from '@chakra-ui/react';

export const Footer: FC = () => {

    const selectedBackgroundColor = useColorModeValue('gray.100', 'gray.600');

    return (
        <HStack
            justifyContent="center"
            alignItems="center"
            p={5}
            backgroundColor={selectedBackgroundColor}
            position="fixed"
            bottom={0}
            left={0}
            right={0}
            zIndex={1000}
            boxShadow="0 -2px 5px rgba(0, 0, 0, 0.1)"
        >
            <Text textAlign="center" fontSize="1.2rem" noOfLines={1}>
                PlayScout | Oded Atias | Copyright © 2025 - All rights reserved
            </Text>
        </HStack>
    );
};
