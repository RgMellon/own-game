import { useRouter } from 'next/router'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'
import React from 'react'
import Base from 'templates/Base'

import * as S from './styles'

export type ProfileProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />

          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
