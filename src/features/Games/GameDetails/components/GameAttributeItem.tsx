import { GridItem, GridItemProps, Text, TextProps } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode,
    attributeName: string,
    gridItemProps?: GridItemProps,
    labelProps?: TextProps,

};

const GameAttributeItem: FC<Props> = (props: Props) => {

    const { children, gridItemProps = {}, labelProps = {}, attributeName } = props

    return (
        <GridItem {...gridItemProps}>
            <Text {...labelProps}>
                {attributeName}
            </Text>
            {children}
        </GridItem>
    )
}

export default GameAttributeItem