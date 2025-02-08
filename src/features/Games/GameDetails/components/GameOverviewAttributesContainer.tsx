// React imports
import { FC, ReactNode } from 'react';
// Third party libraries imports
import { HStack } from '@chakra-ui/react';

interface Props {
    children: ReactNode,
    isPortrait: boolean,
}

const GameOverviewAttributesContainer: FC<Props> = ({ children, isPortrait }: Props) => {

    if (isPortrait) {
        return children;
    }

    return (
        <HStack alignItems='flex-start' justifyContent='space-between'>
            {children}
        </HStack>
    )
}

export default GameOverviewAttributesContainer