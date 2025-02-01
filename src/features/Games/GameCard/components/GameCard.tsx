// React imports
import { FC } from 'react';
// Third party libraries imports
import { Box, CardBody, CardProps, Heading, HStack, Spacer } from '@chakra-ui/react';
// FS imports
import { Game } from 'src/features/Games/GamesList/types';
import { GameCardContainer, GameCardImage, CriticScore, PlatformsList } from 'features/Games/GameCard/components';
import { useNavigate } from 'react-router-dom';

interface Props {
    game: Game,
}

const GameCard: FC<Props> = ({ game }: Props) => {

    const { id, background_image, name, parent_platforms, metacritic } = game;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/games/:${id}`)
    };

    const cardProps: CardProps = {
        onClickCapture: handleClick,
        transition: "transform 0.2s ease, box-shadow 02s ease",
        _hover: {
            transform: 'scale(1.05)',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
        }
    };

    return (
        <GameCardContainer cardProps={cardProps}>
            <GameCardImage imageUrl={background_image} imageAlt={`${name} image`} />
            <CardBody h='40%'>
                <HStack mt={2} alignItems='flex-start'>
                    <Heading fontSize={'2xl'} noOfLines={2}>{name}</Heading>
                    <Spacer />
                    <Box>
                        <CriticScore score={metacritic} />
                    </Box>
                </HStack>
                <HStack mt={2} mr={-5}>
                    <PlatformsList platforms={parent_platforms} />
                </HStack>
            </CardBody>
        </GameCardContainer>
    )
}

export default GameCard