import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { useQueryGames } from 'graphql/queries/games'

import ExploreSidebar, { ItemProps } from 'components/ExploreSideBar'
import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'

import Empty from 'components/Empty'

import * as S from './styles'
import {
  parseQueryStringToFilter,
  parseQueryStringToWhere
} from 'utils/filters'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import React from 'react'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  // hook do appolo client (executado no lado client)
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) {
    return <p> Loading ... </p>
  }

  const { games, gamesConnection } = data
  const hasMoreGames = games?.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })

    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 15, start: data?.games.length }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={handleFilter}
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
        />

        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map((game) => (
                  <GameCard
                    key={game.slug}
                    title={game.name}
                    developer={game.developers[0].name}
                    img={`http://localhost:1337${game.cover!.url}`}
                    price={game.price}
                    slug={game.slug}
                  />
                ))}
              </Grid>

              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dot.svg"
                      alt="loading more games"
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p> Show More</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="We didn't find any games with this filter"
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
