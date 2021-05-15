import FormProfile from 'components/FormProfile'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'

import protectedRoutes from 'utils/protected-routes'

// import { Container } from './styles';

const Me = () => {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}

export default Me

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session }
  }
}
