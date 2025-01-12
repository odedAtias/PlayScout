// React imports
import { FC } from "react";
// Third party libraries imports
import { HStack, Spinner } from "@chakra-ui/react";

export const Loader: FC = () => (
    <HStack w={'100%'} justifyContent={'center'} alignItems={'center'} marginTop={10}>
        <Spinner boxSize={50} />
    </HStack>
);