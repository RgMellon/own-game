import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_newGames_highlight
} from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper, cartMappers } from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpeg'
      },
      title: 'Banner title',
      subtitle: 'Banner subTitle',
      button: {
        label: 'button lable',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'normal'
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1337/image.jpeg',
        title: 'Banner title',
        subtitle: 'Banner subTitle',
        buttonLabel: 'button lable',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'normal'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the right format when mapped', () => {
    const game = {
      id: '1',
      name: 'game',
      developers: [
        {
          name: 'developer'
        }
      ],
      slug: 'game',
      cover: {
        url: '/image.jpg'
      },
      price: 10
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'developer',
        img: 'http://localhost:1337/image.jpg',
        price: 10
      }
    ])
  })
})

describe('highLightMapper()', () => {
  it('should return mapped highlight', () => {
    const highlight = {
      title: 'title',
      subtitle: 'subtitle',
      background: {
        url: '/image.jpg'
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left',
      floatImage: {
        url: '/image.jpg'
      }
    } as QueryHome_sections_newGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'title',
      subtitle: 'subtitle',
      backgroundImage: 'http://localhost:1337/image.jpg',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left',
      floatImage: 'http://localhost:1337/image.jpg'
    })
  })
})

describe('cartMapper()', () => {
  it('should return an empty array if there no game', () => {
    expect(cartMappers(undefined)).toStrictEqual([])
  })

  it('should return mapped cart', () => {
    const cart = {
      id: '1',
      cover: {
        url: '/sample-game.jpg'
      },
      name: 'game',
      price: 10.5
    } as QueryGames_games

    expect(cartMappers([cart])).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1337/sample-game.jpg',
        price: '$10.50',
        title: 'game'
      }
    ])
  })
})
