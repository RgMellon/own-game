import { signOut } from 'next-auth/client'
import {
  AccountCircle,
  CreditCard,
  FormatListBulleted,
  ExitToApp
} from '@styled-icons/material-outlined'
import Link from 'next/link'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: 'profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      <Link href="/profile/me" passHref aria-label="/profile/me">
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <span> My profile </span>
        </S.Link>
      </Link>

      <Link href="/profile/cards" passHref>
        <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
          <CreditCard size={24} />
          <span> My cards </span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <FormatListBulleted size={24} />
          <span> My orders </span>
        </S.Link>
      </Link>

      <S.Link
        role="button"
        onClick={() => {
          signOut()
        }}
      >
        <ExitToApp size={24} />
        <span> Sign out </span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
