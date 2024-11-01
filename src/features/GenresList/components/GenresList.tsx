import React from 'react'

import { useFetchGenres } from '../hooks'

const GenresList = () => {
    const { payload, error, isLoading } = useFetchGenres();

    console.info('========payload', payload);


    return (
        <div>GenresList</div>
    )
}

export default GenresList