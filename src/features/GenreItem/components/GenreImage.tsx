import { FC } from 'react'

interface Props {
    image_background: string;
    name: string;
};

const GenreImage: FC<Props> = ({ image_background, name }) => {
    return (
        <img src={image_background} alt={`Image of ${name} genre`} width={'45px'} />
    )
}

export default GenreImage