import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import { initializeApollo } from 'utils/apollo'
import { QueryGamesVariables, QueryGames } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'

import Game, { GameTemplateProps } from '../../templates/Game'

import { QueryRecomended } from 'graphql/generated/QueryRecomended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
import { QueryUpcoming } from 'graphql/generated/QueryUpcoming'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // se a rota n tiver sido gerada ainda
  // vc pode mostrar um load
  // ou uma tela esqueleto
  if (router.isFallback) return null

  return <Game {...props} />
}

// o getStaticPaths vai gerar as paginas, porem se eu n passar um limite ele irá gerar todas as pages
// se ele gerar tudo de uma vez, por exemplo 300 paginas vai ficar mt pesado para o build

// Com o get static paths eu vou criar as paginas, as urls, porem n o conteudo
//pois o conteudo sera pego no static props
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  // passa pelas 9 paginas geradas e pega os slugs
  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    },
    fetchPolicy: 'no-cache'
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  // get recommendeds
  const { data: recommendedSection } = await apolloClient.query<
    QueryRecomended
  >({
    query: QUERY_RECOMMENDED
  })

  // get upcoming games and highlight
  const { data: upcoming } = await apolloClient.query<QueryUpcoming>({
    query: QUERY_UPCOMING
  })

  return {
    revalidate: 60,
    props: {
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        labe: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        publisher: game.publisher?.name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },

      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcommmingHighLights: highlightMapper(
        upcoming.showCase?.upcomingGames?.highlight
      ),
      recommendedTitle: recommendedSection.recommended?.section?.title,
      recomemendedGames: gamesMapper(
        recommendedSection.recommended?.section?.games
      )
    }
  }
}
