// React imports
import { FC, useMemo } from 'react'
// Third party libraries imports
import { Badge } from '@chakra-ui/react'
// Fs imports
import { getColorByScore } from '../utils'

interface Props {
    score: number,
}

const CriticScore: FC<Props> = ({ score = 75 }: Props) => {

    const color = useMemo(() => getColorByScore(score), [score]);

    return <Badge variant='solid' colorScheme={color}>{score}</Badge>
}

export default CriticScore