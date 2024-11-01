// react imports
import { FC } from 'react'
// Third party libraries imports
import { Box, Text } from '@chakra-ui/react'
import { FaXbox, FaWindows, FaPlaystation, FaApple, FaAndroid, FaLinux, FaAppStoreIos } from "react-icons/fa";
import { SiNintendo3Ds } from "react-icons/si";
// FS imports
import { ParentPlatform } from '../../GamesList/types'
import List from '../../../components/List';

interface Props {
    platforms: ParentPlatform[]
}

const PlatformsList: FC<Props> = ({ platforms }: Props) => {

    const platformsIcons: Record<string, JSX.Element> = Object.freeze({
        'xbox': <FaXbox />,
        'pc': <FaWindows />,
        'playstation': <FaPlaystation />,
        'nintendo': <SiNintendo3Ds />,
        'mac': <FaApple />,
        'android': <FaAndroid />,
        'linux': <FaLinux />,
        'ios': <FaAppStoreIos />
    });

    const renderItem = (item: ParentPlatform) =>
        <Box key={item.platform.id}>
            {platformsIcons[item.platform.slug] || <Text>{item.platform.slug}</Text>}
        </Box>
        ;

    return <List data={platforms} renderItem={renderItem} />
}

export default PlatformsList