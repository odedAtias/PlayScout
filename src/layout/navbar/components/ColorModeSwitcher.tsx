// React imports
import { FC } from 'react'
// Third party libraries imports
import { useColorMode, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'


const ColorModeSwitcher: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const colorModeMap = Object.freeze({
        'dark': <SunIcon />,
        'light': <MoonIcon />
    });

    return (
        <IconButton
            onClick={toggleColorMode}
            aria-label='Color mode toggle'
            icon={colorModeMap[colorMode]}
        />
    )
}

export default ColorModeSwitcher;