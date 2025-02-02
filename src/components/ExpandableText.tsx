// React imports
import { FC, useState } from 'react'
// Third party libraries imports
import { TextProps, Text, Button, ButtonProps, Box } from '@chakra-ui/react';

interface Props {
    children: string;
    textProps?: TextProps;
    buttonProps?: ButtonProps;
};

const ExpandableText: FC<Props> = ({ children, textProps = {}, buttonProps = {} }: Props) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleClick = () => {
        setIsExpanded((prev: boolean) => !prev);
    }

    const maxLength = 400;

    const getTruncatedText = (text: string): string => {
        if (text?.length <= maxLength)
            return text;

        // Find the last space within the max length
        let endIndex = text.lastIndexOf(" ", maxLength);

        // If not found " "
        if (endIndex === -1)
            endIndex = maxLength; // Fallback to maxLength if no space is found

        let truncated = text.slice(0, endIndex).trim();

        // Remove trailing punctuation if necessary
        if ([",", "."].includes(truncated.slice(-1))) {
            // Removing the last element
            truncated = truncated.slice(0, -1);
        }

        return `${truncated} ...`;
    };

    const truncatedText = children?.length > maxLength ? getTruncatedText(children) : children;

    return (
        <Box alignItems={'center'} >
            <Text {...textProps} display={"inline"}>
                {isExpanded ? children : truncatedText}
            </Text>
            <Button {...buttonProps} mb={'1.5'} onClick={handleClick}>{isExpanded ? "Show Less" : "Show More"}</Button>
        </Box>
    )
}

export default ExpandableText