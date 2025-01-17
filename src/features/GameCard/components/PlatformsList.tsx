// react imports
import { FC } from 'react'
// Third party libraries imports
import { Box, Text } from '@chakra-ui/react'
import { FaXbox, FaWindows, FaPlaystation, FaApple, FaAndroid, FaLinux, FaAppStoreIos } from "react-icons/fa";
import { SiNintendo3Ds, SiAtari, SiSega, SiCommodore } from "react-icons/si";
// FS imports
import { ParentPlatform } from 'features/Games/types'
import { List } from 'components';

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
        'ios': <FaAppStoreIos />,
        'atari': <SiAtari />,
        'sega': <SiSega />,
        'commodore-amiga': <SiCommodore />,
    });

    const howManyPlatformsWithoutIcon: number = platforms.filter((p: ParentPlatform) => !platformsIcons[p.platform.slug]).length;

    const renderItem = (item: ParentPlatform) => (
        <Box key={item.platform.id}>
            {platformsIcons[item.platform.slug]}
        </Box>
    );

    const PlatformsWithoutIcons = () => {
        if (platforms?.length === 1 && howManyPlatformsWithoutIcon === 1) {
            return (
                <Text>
                    {platforms?.[0]?.platform?.slug}
                </Text>
            )
        }
        else if (howManyPlatformsWithoutIcon > 0) {
            return (
                <Text marginLeft={-2} fontSize={13}>{`+${howManyPlatformsWithoutIcon}`}</Text>
            )
        }
        else return null;
    };

    return (
        <>
            <List data={platforms} renderItem={renderItem} />
            <PlatformsWithoutIcons />
        </>
    )
}

export default PlatformsList