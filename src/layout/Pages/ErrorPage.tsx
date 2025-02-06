// React imports
import { FC } from "react";
// Third party libraries imports
import { Box, Button, Heading, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";

// FS imports
import { Footer, Navbar } from "layout";

interface RouteError {
    status?: number;
    statusText?: string;
    internal?: boolean;
    data?: string;
    error?: Record<string, unknown>;
}

const ErrorPage: FC = () => {

    const textColor = useColorModeValue("black", "white");
    const backgroundColor = useColorModeValue("white", "gray.700");

    const { status, data } = useRouteError() as RouteError;
    const errorMessage: string = data ? data?.replace(/^Error: /, '') : "";

    return (
        <>
            <Navbar />
            <HStack spacing={6} align="flex-start" mt="5%" mx="6.5%" flexDirection={{ base: 'column', lg: "row" }}>
                <Heading as="h1" fontSize={{ base: "6rem", lg: "16rem" }} mb={0}>{status || "404"}</Heading>
                <Box mt={{ lg: '14' }} ml={{ base: 4, lg: 10 }}>
                    <Text fontSize={{ base: "3xl", lg: "2xl" }} fontWeight="medium">Hmm, that’s not right ...</Text>
                    <Text fontSize={{ base: "3xl", lg: "2xl" }} fontWeight="medium">{errorMessage}</Text>
                    <Text fontSize={{ base: "3xl", lg: "2xl" }} fontWeight="medium">Let’s get you back on track:</Text>
                    <Button
                        mt={{ base: 10, lg: 8 }}
                        h={{ base: '20', lg: '16' }}
                        w={250}
                        fontSize={{ base: "2xl", lg: "xl" }}
                        color={textColor}
                        bg={backgroundColor}
                        borderRadius="full"
                        _hover={{ opacity: 0.8 }}
                        aria-label="Return to home"
                    >
                        <Link to="/">Return to Home</Link>
                    </Button>
                </Box>
            </HStack >
            <Footer />
        </>
    );
};

export default ErrorPage;