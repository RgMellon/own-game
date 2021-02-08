import Base from 'templates/Base'
import { Container } from 'components/Container'
import Empty from 'components/Empty'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404"
          description="Ops this page doesn't not exist go back to the store"
          hasLink
        />
      </Container>
    </Base>
  )
}
