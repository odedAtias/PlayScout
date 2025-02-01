import { FC } from 'react'
import { useParams } from 'react-router-dom'

const GameDetails: FC = () => {

  const { id } = useParams();

  return (
    <div> GameDetails with id : {id}</div>
  )
}

export default GameDetails