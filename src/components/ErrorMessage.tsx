// React imports
import { FC, ReactNode } from 'react';
// Third party libraries imports
import { NotAllowedIcon } from '@chakra-ui/icons';
import { Container, ContainerProps, Text, TextProps } from '@chakra-ui/react';

interface Props {
    message: string;
    containerCustomStyle?: ContainerProps;
    icon?: ReactNode;
    textCustomStyle?: TextProps;
}

const ErrorMessage: FC<Props> = ({ message, containerCustomStyle, icon, textCustomStyle }) => (
    <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
        {...containerCustomStyle}
    >
        {icon || <NotAllowedIcon color="red" fontSize="2xl" mr="5px" />}
        <Text color="red" fontSize="2xl" textAlign="center" {...textCustomStyle}>
            {message}
        </Text>
    </Container>
);

export default ErrorMessage;