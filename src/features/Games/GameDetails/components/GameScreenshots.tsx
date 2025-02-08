// React imports
import { FC } from 'react'
//  third party libraries imports
// FS imports
import { useFetchGameScreenshots } from 'features/Games/GameDetails/hooks'
import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { Screenshot } from '../types';
import { GenericImage, List } from 'src/components';

interface Props {
  gameId: string;
  isPortrait: boolean;
}


const GameScreenshots: FC<Props> = ({ gameId, isPortrait }: Props) => {

  const { data: screenshots, error } = useFetchGameScreenshots(gameId!);

  if (!screenshots || error) {
    return null;
  }


  const renderItem = ({ id, image }: Screenshot) => {

    return <GridItem key={id}>
      <GenericImage imageUrl={image} />
    </GridItem>
  };



  return (
    <>
      <Heading mb={4}>Screenshots</Heading>
      <Grid gridTemplateColumns={`repeat(${isPortrait ? 1 : 2}, 1fr)`} gap={isPortrait ? 2 : 4}>
        <List data={screenshots!} renderItem={renderItem} />
      </Grid>
    </>
  )
}

export default GameScreenshots