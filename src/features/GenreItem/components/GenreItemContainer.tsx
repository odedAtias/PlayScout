// React imports
import { FC, ReactNode } from 'react';
// Third party libraries imports
import { HStack } from '@chakra-ui/react';

interface Props {
    children: ReactNode,
}

const GenreItemContainer: FC<Props> = ({ children }: Props) => {
    return (
        <HStack mb={3}>{children}</HStack>
    )
}

export default GenreItemContainer