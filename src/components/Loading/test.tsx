import { render, screen } from 'utils/test-utils'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the label loading', () => {
    render(<Loading />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
})
