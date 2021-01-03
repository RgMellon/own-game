import { rendertWithTheme } from 'utils/tests/helpers'
import { Divider } from '.'

describe('<Divider />', () => {
  it('should render the Divider', () => {
    const { container } = rendertWithTheme(<Divider />)

    // expect(screen.getByRole('heading', { name: /Divider/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(` `)
  })
})
