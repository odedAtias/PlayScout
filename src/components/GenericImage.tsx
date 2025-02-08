// React imports
import { FC } from 'react'
// Third party libraries imports
import { Image, ImageProps } from '@chakra-ui/react'

interface Props {
    imageUrl: string,
    imageAlt?: string,
    imageProps?: ImageProps,
}

const GenericImage: FC<Props> = ({ imageUrl, imageAlt = "Image of something descriptive", imageProps = {} }: Props) => {
    return (
        <Image src={imageUrl} alt={imageAlt} {...imageProps} />
    )
}

export default GenericImage