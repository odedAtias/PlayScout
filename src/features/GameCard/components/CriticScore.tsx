// React imports
import { FC } from 'react'
// Third party libraries imports
import { Badge } from '@chakra-ui/react'

interface Props {
    score: number,
}

const CriticScore: FC<Props> = ({ score = 75 }: Props) => {
    const scoreColor = score > 80 ? 'green' : score > 70 ? 'yellow' : 'red';

    return (
        <Badge variant='solid' colorScheme={scoreColor}>{score}</Badge>
    )
}

export default CriticScore