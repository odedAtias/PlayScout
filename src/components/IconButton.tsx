import { Button } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
    Icon: any
    w?: number
    h?: number
    color?: string
    onClick?: () => void
}

const IconButton: FC<Props> = (props: Props) => {
    const { Icon, w, h, color, onClick } = props;
    return (
        <Button>
            <Icon w={w} h={h} color={color} onClick={onClick} />
        </Button>
    )
}

export default IconButton