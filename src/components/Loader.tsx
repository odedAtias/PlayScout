// React imports
import { FC } from "react";
// Third party libraries imports
import { HStack, Spinner, SpinnerProps } from "@chakra-ui/react";

interface Props {
    spinnerProps?: SpinnerProps;
};

const Loader: FC<Props> = ({ spinnerProps = { boxSize: 50 } }: Props) => (
    <HStack w={'100%'} justifyContent={'center'} alignItems={'center'} marginTop={10}>
        <Spinner {...spinnerProps} />
    </HStack>
);

export default Loader;