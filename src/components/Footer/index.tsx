import Link from 'next/link'

import Logo from 'components/Logo'
import Heading from 'components/Heading'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sac@wongames.com"> sac@wongames.com </a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            rel="noopenner, noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            rel="noopenner, noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            rel="noopenner, noreferrer"
            target="_blank"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            rel="noopenner, noreferrer"
            target="_blank"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/">
            <a>Store</a>
          </Link>

          <Link href="/">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>

        <span>Lorem ipsum</span>
        <span>Lorem ipsum dolor sit amet</span>
        <span>Loreeem, Loreem</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2020 All rights reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
