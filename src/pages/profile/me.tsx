import FormProfile, { FormProfileProps } from 'components/FormProfile'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import { initializeApollo } from 'utils/apollo'

import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
import protectedRoutes from 'utils/protected-routes'

// import { Container } from './styles';

const Me = (props: FormProfileProps) => {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export default Me

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const appoloClient = initializeApollo(null, session)

  const { data } = await appoloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })

  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}
