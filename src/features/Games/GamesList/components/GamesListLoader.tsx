// React imports
import { FC } from 'react'
// FS imports
import { Loader } from 'components/Loader';

interface Props {
    showLoader: boolean;
};

const GamesListLoader: FC<Props> = ({ showLoader }: Props) => {
    return (
        showLoader && <Loader />
    )
}

export default GamesListLoader