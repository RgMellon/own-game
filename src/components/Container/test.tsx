import { Container } from '.'
import { rendertWithTheme } from 'utils/tests/helpers'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = rendertWithTheme(
      <Container>
        <span> Won Games</span>
      </Container>
    )

    expect(container.firstChild).toMatchInlineSnapshot(` `)
  })
})
