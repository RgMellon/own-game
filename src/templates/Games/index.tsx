import { GameCardProp } from 'components/GameCard'
import ExploreSidebar, { ItemProps } from 'components/ExploreSideBar'
import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'

import Base from 'templates/Base'

import * as S from './styles'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

export type GamesTemplateProps = {
  games?: GameCardProp[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={(item) => {
          console.log('ooioio', item)
        }}
      />

      <section>
        <Grid>
          {games.map((item) => (
            <GameCard key={item.title} {...item} />
          ))}
        </Grid>

        <S.ShowMore
          role="button"
          onClick={() => {
            console.log('au au')
          }}
        >
          <p> Show More</p>
          <ArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default GamesTemplate
