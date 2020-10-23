import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/dist/uaufi.com',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    rendertWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  // it('should render background image', () => {
  //   const { container } = rendertWithTheme(
  //     <Highlight
  //       title="Heading 1"
  //       subtitle="Heading 2"
  //       backgroundImage="/dist/uaufi.com"
  //       buttonLabel="Buy now"
  //       buttonLink="/rdr2"
  //     />
  //   )

  //   expect(container.firstChild).toHaveStyle({
  //     backgroundImage: `url(${props.backgroundImage})`
  //   })
  // })

  // it('should render float image', () => {
  //   rendertWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

  //   expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
  //     'src',
  //     '/float-image.png'
  //   )
  // })

  // it('should render align right by default', () => {
  //   const { container } = rendertWithTheme(<Highlight {...props} />)

  //   expect(container.firstChild).toHaveStyleRule(
  //     'grid-template-areas',
  //     "'floatimage content'"
  //   )

  //   expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
  //     modifier: `${S.Content}`
  //   })
  // })

  // it('should render align left by default', () => {
  //   const { container } = rendertWithTheme(
  //     <Highlight {...props} alignment="left" />
  //   )

  //   expect(container.firstChild).toHaveStyleRule(
  //     'grid-template-areas',
  //     "'content floatimage'"
  //   )

  //   expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
  //     modifier: `${S.Content}`
  //   })
  // })
})
