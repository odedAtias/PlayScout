// React imports
import { FC, useMemo } from 'react';
// Third party libraries imports
import { Grid, GridItemProps, Text, TextProps } from '@chakra-ui/react';
// FS imports
import { List } from 'components';
import { CriticScore } from 'features/Games/GameCard/components';
import { GameDetails, Publisher } from 'features/Games/GameDetails/types';
import { Genre, ParentPlatform, PlatformDetailsShort } from 'features/Games/GamesList/types';
import { GameAttributeItem } from 'features/Games/GameDetails/components';

interface Props {
    game: GameDetails,
}

const GameAttributes: FC<Props> = ({ game }) => {

    const { parent_platforms, metacritic, genres, publishers } = game;

    const platforms = useMemo(() => parent_platforms?.map((p: ParentPlatform) => p.platform), [parent_platforms]);
    const genresList = useMemo(() => genres, [genres]);
    const publishersList = useMemo(() => publishers, [publishers]);

    const renderItem = <T extends PlatformDetailsShort | Genre | Publisher>(item: T) => (
        <Text key={item?.id} fontSize={{ base: '0.6rem', md: '0.9rem' }} fontWeight="semibold">
            {item?.name}
        </Text>
    );

    const gridItemProps: GridItemProps = {
        mb: 5,
    };

    const labelProps: TextProps = {
        fontWeight: 'bold',
        fontSize: { base: '1rem', md: '1.2rem' },
        color: 'ThreeDShadow'
    };

    return (
        <Grid gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }} mt={5}>
            <GameAttributeItem attributeName="Platforms" gridItemProps={gridItemProps} labelProps={labelProps}>
                <List data={platforms} renderItem={renderItem} />
            </GameAttributeItem>

            <GameAttributeItem attributeName="Genres" gridItemProps={gridItemProps} labelProps={labelProps}>
                <List data={genresList} renderItem={renderItem} />
            </GameAttributeItem>

            <GameAttributeItem attributeName="Metacritic Score" gridItemProps={gridItemProps} labelProps={labelProps}>
                <CriticScore score={metacritic} />
            </GameAttributeItem>

            <GameAttributeItem attributeName="Publishers" gridItemProps={gridItemProps} labelProps={labelProps}>
                <List data={publishersList} renderItem={renderItem} />
            </GameAttributeItem>
        </Grid>
    );
};

export default GameAttributes;