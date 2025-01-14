// React imports
import { FC } from 'react'
// Other FS imports
import { ErrorMessage } from '../../../components'

interface Props {
    error: Error | null,
};

const GamesListErrorMessage: FC<Props> = ({ error }: Props) => {
    return (
        error && <ErrorMessage message={error?.message} textCustomStyle={{ fontSize: '1.8rem', color: 'white' }} />
    )
}

export default GamesListErrorMessage