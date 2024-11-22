// React imports
import { useState, forwardRef, ReactNode, ComponentProps } from 'react';
// Third party libraries imports
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuButtonProps, MenuList, MenuListProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Props<T> {
    title: string;
    menuButtonProps?: MenuButtonProps;
    menuListProps?: MenuListProps;
    list: T[];
    renderItem: (item: T) => ReactNode;
}

const MotionChevronDownIcon = motion(
    forwardRef<SVGSVGElement, ComponentProps<typeof ChevronDownIcon>>(
        (props, ref) => <ChevronDownIcon boxSize={'1.2rem'} ref={ref} {...props} />
    )
);

const GenericMenu = <T,>({ title = "Menu", menuButtonProps, menuListProps, list, renderItem }: Props<T>): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickMenu = () => {
        setIsOpen((prev: boolean) => !prev);
    };

    const AnimatedChevronIcon = <MotionChevronDownIcon animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} />;

    return (
        <Menu onOpen={handleClickMenu} onClose={handleClickMenu}>
            <MenuButton as={Button} rightIcon={AnimatedChevronIcon} {...menuButtonProps}>
                {title}
            </MenuButton>
            <MenuList {...menuListProps}>
                {Array.isArray(list) && list.map((item: T) => renderItem(item))}
            </MenuList>
        </Menu>
    );
};

export default GenericMenu;