import { FC } from 'react'

import { useFetchGenres } from '../hooks'
import { Genre } from '../types';

import { Text } from '@chakra-ui/react'

const GenresList: FC = () => {
    const { genres, error, isLoading } = useFetchGenres();



    return (
        <div>
            {genres?.map((g: Genre) => <Text key={g.id}>{g.name}</Text>)}
        </div>
    )
}

export default GenresList