import CardsList, { CardListProps } from 'components/CardsList'
import mockCards from 'components/PaymentOptions/mock'
import Profile from 'templates/Profile'

// import { Container } from './styles';

export default function Cards({ cards }: CardListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
