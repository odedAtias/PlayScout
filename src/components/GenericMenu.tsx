// Third party libraries imports
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuButtonProps, MenuList, MenuListProps } from '@chakra-ui/react';

interface Props<T> {
    title: string;
    menuButtonProps?: MenuButtonProps;
    menuListProps?: MenuListProps;
    list: T[];
    renderItem: (item: T) => React.ReactNode;
}

const GenericMenu = <T,>({ title = "Menu", menuButtonProps, menuListProps, list, renderItem }: Props<T>): JSX.Element => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} {...menuButtonProps}>{title}</MenuButton>
            <MenuList {...menuListProps}>
                {Array.isArray(list) && list.map((item: T) => renderItem(item))}
            </MenuList>
        </Menu>
    );
};

export default GenericMenu;
