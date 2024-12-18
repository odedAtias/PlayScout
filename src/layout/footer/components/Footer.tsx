import { FC } from 'react';
import { HStack, Text, useColorModeValue } from '@chakra-ui/react';

export const Footer: FC = () => {
    const selectedBackgroundColor = useColorModeValue('gray.100', 'gray.600');

    return (
        <HStack
            justifyContent="center"
            alignItems="center"
            p={5}
            backgroundColor={selectedBackgroundColor}
            position="fixed" // Fix it in place
            bottom={0} // Position it at the bottom of the viewport
            left={0} // Stretch it to the left edge
            right={0} // Stretch it to the right edge
            zIndex={1000} // Ensure it stays above other elements
            boxShadow="0 -2px 5px rgba(0, 0, 0, 0.1)" // Optional shadow for aesthetics
        >
            <Text textAlign="center" fontSize="1.2rem">
                PlayScout | Oded Atias | Copyright © 2024 - All rights reserved
            </Text>
        </HStack>
    );
};
