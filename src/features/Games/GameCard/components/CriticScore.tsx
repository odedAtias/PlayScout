// React imports
import { FC, useMemo } from 'react'
// Third party libraries imports
import { Badge } from '@chakra-ui/react'
// Fs imports
import { getColorByScore } from 'features/Games/GameCard/utils'

interface Props {
    score: number,
}

const CriticScore: FC<Props> = ({ score }: Props) => {

    const color = useMemo(() => getColorByScore(score), [score]);

    return <Badge variant='solid' colorScheme={color} fontSize={15}>{score ?? "No-Score"}</Badge>
}

export default CriticScore