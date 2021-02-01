import OrdersList, { OrdersListProps } from 'components/OrdersList'

import Profile from 'templates/Profile'

import mockOrderList from 'components/OrdersList/mock'
// import { Container } from './styles';

export default function Oders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: mockOrderList
    }
  }
}
