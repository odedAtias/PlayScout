// React imports
import { FC, ReactNode } from 'react';
// Third party libraries imports
import { HStack, StackProps } from '@chakra-ui/react';

interface Props {
    children: ReactNode,
    customStyle?: StackProps,
}

const GenreItemContainer: FC<Props> = ({ children, customStyle = {} }: Props) => {
    return (
        <HStack mb={2} paddingY={2} w='90%' paddingLeft={2} borderRadius={5} {...customStyle}>{children}</HStack>
    )
}

export default GenreItemContainer